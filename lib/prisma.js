import { PrismaClient } from "@prisma/client";

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}

//  each time hot reload happens new instance is created to avoid that and reuse the previous one we use global instanceing 