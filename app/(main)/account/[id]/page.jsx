import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import { getAccountWithTransactions } from "@/actions/accounts";
import TransactionTable from "../_components/transaction-table";
import {AccountChart} from "../_components/account-chart";
import { BarLoader } from "react-spinners";

const AccountPage = async ({ params }) => {
  const accountData = await getAccountWithTransactions(params.id);
  if (!accountData) {
    notFound();
  }

  const { transactions, ...account } = accountData;

  return (
    <div className="space-y-8 px-5 ">
        <div className="flex gap-4 items-end justify-between">
      <div>
        {/* Updated title style */}
        <h1 className="text-6xl font-extrabold tracking-tighter pr-2 pb-2 mb-5 text-transparent bg-clip-text bg-gradient-to-br from-[#E63946] to-pink-500 capitalize">
          {account.name}
        </h1>
        <p className="text-muted-foreground">{account.type.charAt(0) + account.type.slice(1).toLowerCase()} Account</p>
      </div>
      <div className="text-right pb-2">
        <div className="text-xl sm:text-2xl font-bold">${parseFloat(account.balance).toFixed(2)}</div>
        <p className="text-sm text-muted-foreground">{account._count.transactions} Transactions</p>
      </div>
      </div>

      {/* chart <section> */}
            <Suspense  fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}>
            <AccountChart transactions={transactions} />
      </Suspense>
      {/* table */}
      <Suspense  fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}>
         <TransactionTable transactions={transactions} />
      </Suspense>
    </div>
  );
};

export default AccountPage;
