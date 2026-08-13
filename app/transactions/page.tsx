import Sidebar from "../../components/Sidebar";
import { prisma } from "@/lib/prisma";

export default async function TransactionsPage() {
  const deposits = await prisma.depositRequest.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const payouts = await prisma.payout.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const transactions = [
    ...deposits.map((item) => ({
      id: `DEP-${String(item.id).padStart(5, "0")}`,
      type: "Deposit",
      amount: Number(item.amount),
      status: item.status,
      createdAt: item.createdAt,
    })),

    ...payouts.map((item) => ({
      id: `PY-${String(item.id).padStart(5, "0")}`,
      type: "Payout",
      amount: Number(item.amount),
      status: item.status,
      createdAt: item.createdAt,
    })),
  ].sort(
    (a, b) =>
      new Date(b.createdAt).getTime() -
      new Date(a.createdAt).getTime()
  );

  return (
    <main className="min-h-screen text-white">
      <div className="flex min-h-screen">
        <Sidebar />

        <section className="min-w-0 flex-1 p-8">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs tracking-[0.2em] text-blue-400">
              TRADER PANEL
            </p>

            <h1 className="mt-1 text-3xl font-bold">
              Transactions
            </h1>

            <p className="mt-2 text-sm text-gray-400">
              Deposit and payout history
            </p>

            <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-[#0b1628]/90">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px] text-left text-sm">
                  <thead className="border-b border-white/10 text-gray-400">
                    <tr>
                      <th className="p-4">Transaction ID</th>
                      <th className="p-4">Type</th>
                      <th className="p-4">Amount</th>
                      <th className="p-4">Status</th>
                      <th className="p-4">Date</th>
                    </tr>
                  </thead>

                  <tbody>
                    {transactions.map((transaction) => (
                      <tr
                        key={transaction.id}
                        className="border-b border-white/10"
                      >
                        <td className="p-4 font-mono text-gray-300">
                          {transaction.id}
                        </td>

                        <td className="p-4">
                          <span
                            className={
                              transaction.type === "Deposit"
                                ? "rounded-lg bg-green-500/10 px-3 py-1 text-xs text-green-400"
                                : "rounded-lg bg-blue-500/10 px-3 py-1 text-xs text-blue-400"
                            }
                          >
                            {transaction.type}
                          </span>
                        </td>

                        <td className="p-4 font-semibold">
                          ${transaction.amount.toLocaleString("en-US")}
                        </td>

                        <td className="p-4">
                          <span
                            className={`rounded-lg px-3 py-1 text-xs ${
                              transaction.status === "confirmed"
                                ? "bg-green-500/10 text-green-400"
                                : transaction.status === "pending"
                                ? "bg-yellow-500/10 text-yellow-400"
                                : "bg-white/5 text-gray-300"
                            }`}
                          >
                            {transaction.status}
                          </span>
                        </td>

                        <td className="p-4 text-gray-400">
                          {new Date(
                            transaction.createdAt
                          ).toLocaleString()}
                        </td>
                      </tr>
))}

                    {transactions.length === 0 && (
                      <tr>
                        <td
                          colSpan={5}
                          className="p-10 text-center text-gray-500"
                        >
                          No transactions yet
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}