import { getUserAccounts } from "@/actions/dashboard";
import { defaultCategories } from "@/data/categories";
import { AddTransactionForm } from "../_components/transaction-form";
import { getTransaction } from "@/actions/transaction";

export default async function AddTransactionPage({ searchParams }) {
  // ✅ Await the async searchParams (required by Next.js 15+)
  const params = await searchParams;
  const editId = params?.edit;

  // ✅ Fetch accounts and transaction
  const accounts = await getUserAccounts();

  let initialData = null;
  if (editId) {
    initialData = await getTransaction(editId);
  }

  return (
  <div
    className="min-h-screen flex flex-col items-center justify-start"
    style={{
      background: "linear-gradient(to right, #282828 0%, #282828 100%)",
    }}
  >
    <div className="max-w-3xl w-full px-5 py-20">
      <div className="flex justify-center md:justify-normal mb-8">
        <h1 className="text-5xl gradient-title text-white">
          {editId ? "Edit" : "Add"} Transaction
        </h1>
      </div>

      {/* 🧾 Transaction Form */}
      <div className="bg-[#1f1f1f] p-8 rounded-2xl shadow-2xl border border-gray-800">
        <AddTransactionForm
          accounts={accounts}
          categories={defaultCategories}
          editMode={!!editId}
          initialData={initialData}
        />
      </div>
    </div>
  </div>
);

}