"use client";

import { useState, useEffect } from "react";
import { Pencil, Check, X } from "lucide-react";
import useFetch from "@/hooks/use-fetch";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { updateBudget } from "@/actions/budget";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export function BudgetProgress({ account }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newBudget, setNewBudget] = useState(account?.budget?.amount?.toString() || "");

  const {
    loading: isLoading,
    fn: updateBudgetFn,
    data: updatedBudget,
    error,
  } = useFetch(updateBudget);

  const percentUsed = account.budget
    ? (account.expenses / account.budget.amount) * 100
    : 0;

  const remaining = account.budget
    ? Math.max(0, account.budget.amount - account.expenses)
    : 0;

  const chartData = [
    {
      name: "Spent",
      value: account.expenses,
      fill: "#ef4444", // red
    },
    {
      name: "Remaining",
      value: remaining,
      fill: "#22c55e", // green
    },
  ];

  const handleUpdateBudget = async () => {
    const amount = parseFloat(newBudget);
    if (isNaN(amount) || amount <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }
    await updateBudgetFn(amount, account.id);
  };

  const handleCancel = () => {
    setNewBudget(account?.budget?.amount?.toString() || "");
    setIsEditing(false);
  };

  useEffect(() => {
    if (updatedBudget?.success) {
      setIsEditing(false);
      toast.success("Budget updated successfully");
    }
  }, [updatedBudget]);

  useEffect(() => {
    if (error) {
      toast.error(error.message || "Failed to update budget");
    }
  }, [error]);

  return (
    <Card
      className="mb-6 rounded-xl border border-gray-700 shadow-lg text-black" >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex-1">
          <CardTitle className="text-sm font-bold text-black text-xl">
            {account.name} Budget
          </CardTitle>
          <div className="flex items-center gap-2 mt-1">
            {isEditing ? (
              <div className="flex items-center gap-2">
                <Input
                  type="number"
                  value={newBudget}
                  onChange={(e) => setNewBudget(e.target.value)}
                  className="w-32 text-black"
                  placeholder="Enter amount"
                  autoFocus
                  disabled={isLoading}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleUpdateBudget}
                  disabled={isLoading}
                >
                  <Check className="h-4 w-4 text-green-400" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleCancel}
                  disabled={isLoading}
                >
                  <X className="h-4 w-4 text-red-400" />
                </Button>
              </div>
            ) : (
              <>
                <CardDescription className="text-black text-1xl">
                  {account.budget
                    ? `${new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "INR",
                      }).format(account.expenses)} of ${new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "INR",
                      }).format(account.budget.amount)} spent`
                    : "No budget set"}
                </CardDescription>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsEditing(true)}
                  className="h-6 w-6"
                >
                  <Pencil className="h-3 w-3 text-black" />
                </Button>
              </>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent>
        {account.budget && (
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="40%"
                outerRadius="80%"
                barSize={20}
                data={chartData}
              >
                <RadialBar
                  minAngle={15}
                  label={{
                    position: "insideStart",
                    fill: "#fff",
                    fontSize: 12,
                  }}
                  background
                  clockWise
                  dataKey="value"
                  cornerRadius={10}
                />
                <Legend
                  iconSize={10}
                  layout="horizontal"
                  verticalAlign="bottom"
                  align="center"
                />
                <Tooltip />
              </RadialBarChart>
            </ResponsiveContainer>
            <p className="text-m text-black-100 text-right -mt-2">
              {percentUsed.toFixed(1)}% used
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
