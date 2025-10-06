import { getUserAccounts, getDashboardData } from "@/actions/dashboard";
import { getCurrentBudget } from "@/actions/budget";
import AccountCard from "./_components/account-card";
import CreateAccountDrawer from "@/components/create-account-drawer";
import { BudgetProgress } from "./_components/budget-progress";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { DashboardOverview } from "./_components/transaction-overview";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const accounts = await getUserAccounts();
  const transactions = await getDashboardData();

  // Redirect if user is not authenticated
  if (!accounts || !transactions) {
    redirect("/sign-in");
  }

  const accountsWithBudget = await Promise.all(
    accounts.map(async (account) => {
      const budget = await getCurrentBudget(account.id);
      return {
        ...account,
        budget: budget?.budget || null,
        expenses: budget?.currentExpenses || 0,
      };
    })
  );

  return (
    <div className="px-5 space-y-8 min-h-screen mt-24">
      {/* Budget Progress */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {accountsWithBudget.map((account) => (
          <BudgetProgress key={account.id} account={account} />
        ))}
      </div>

      {/* Dashboard Overview */}
      <DashboardOverview accounts={accounts} transactions={transactions || []} />

      {/* Accounts Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <CreateAccountDrawer>
          <Card className="cursor-pointer transition hover:shadow-lg hover:scale-[1.02] rounded-xl border border-gray-200">
            <CardContent className="flex flex-col items-center justify-center text-muted-foreground h-full pt-5">
              <Plus className="h-10 w-10 mb-3 text-red-600" />
              <p className="text-sm font-bold text-black-500">New Account</p>
            </CardContent>
          </Card>
        </CreateAccountDrawer>

        {accounts.map((account) => (
          <AccountCard key={account.id} account={account} />
        ))}
      </div>
    </div>
  );
}
