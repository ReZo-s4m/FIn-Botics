"use server";

import aj from "@/lib/arcjet";
import { db } from "@/lib/prisma";
import { request } from "@arcjet/next";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

const serializeTransaction = (obj) => {
  const serialized = { ...obj };
  if (obj.balance) serialized.balance = obj.balance.toNumber();
  if (obj.amount) serialized.amount = obj.amount.toNumber();
  return serialized;
};

export async function getUserAccounts() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  // Ensure user exists in DB
  let user = await db.user.findUnique({ where: { clerkUserId: userId } });
  if (!user) {
    user = await db.user.create({
      data: {
        clerkUserId: userId,
        name: "New User",
        email: `${userId}@placeholder.com`, // you can fill this from Clerk API if needed
      },
    });
  }

  const accounts = await db.account.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    include: {
      _count: { select: { transactions: true } },
    },
  });

  return accounts.map(serializeTransaction);
}

export async function createAccount(data) {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const req = await request();

    const decision = await aj.protect(req, { userId, requested: 1 });

    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        throw new Error("Too many requests. Please try again later.");
      }
      throw new Error("Request blocked");
    }

    // ✅ Ensure user exists in DB
    let user = await db.user.findUnique({ where: { clerkUserId: userId } });
    if (!user) {
      user = await db.user.create({
        data: {
          clerkUserId: userId,
          name: "New User",
          email: `${userId}@placeholder.com`, // optional
        },
      });
    }

    const balanceFloat = parseFloat(data.balance);
    if (isNaN(balanceFloat)) throw new Error("Invalid balance amount");

    const existingAccounts = await db.account.findMany({
      where: { userId: user.id },
    });

    const shouldBeDefault =
      existingAccounts.length === 0 ? true : data.isDefault;

    if (shouldBeDefault) {
      await db.account.updateMany({
        where: { userId: user.id, isDefault: true },
        data: { isDefault: false },
      });
    }

    const account = await db.account.create({
      data: {
        ...data,
        balance: balanceFloat,
        userId: user.id,
        isDefault: shouldBeDefault,
      },
    });

    const serializedAccount = serializeTransaction(account);
    revalidatePath("/dashboard");

    return { success: true, data: serializedAccount };
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
}

export async function getDashboardData() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  // ✅ Ensure user exists
  let user = await db.user.findUnique({ where: { clerkUserId: userId } });
  if (!user) {
    user = await db.user.create({
      data: {
        clerkUserId: userId,
        name: "New User",
        email: `${userId}@placeholder.com`,
      },
    });
  }

  const transactions = await db.transaction.findMany({
    where: { userId: user.id },
    orderBy: { date: "desc" },
  });

  return transactions.map(serializeTransaction);
}
