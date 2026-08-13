import Sidebar from "../../components/Sidebar";
import { prisma } from "@/lib/prisma";
import { createDepositRequest } from "./actions";

export default async function DepositsPage() {
  const deposits = await prisma.depositRequest.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-[#050914] text-white">
      <div className="flex min-h-screen">
        <Sidebar />

        <section className="min-w-0 flex-1 p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs tracking-[0.2em] text-blue-400">
                TRADER PANEL
              </p>

              <h1 className="mt-1 text-3xl font-bold">
                Deposit Requests
              </h1>
            </div>

            <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
              Total: {deposits.length}
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-[#0b1628] p-6">
            <form
              action={createDepositRequest}
              className="mb-6 flex flex-wrap gap-4"
            >
              <input
                name="amount"
                type="number"
                min="0.01"
                step="0.01"
                placeholder="Deposit amount"
                required
                className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none"
              />

              <button
                type="submit"
                className="rounded-xl bg-blue-500 px-5 py-3 font-semibold hover:bg-blue-400"
              >
                Create deposit request
              </button>
            </form>

            {deposits.length === 0 ? (
              <div className="py-12 text-center">
                <p className="text-lg font-semibold">
                  No deposit requests yet
                </p>

                <p className="mt-2 text-sm text-gray-400">
                  New deposit requests will appear here.
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px] text-left text-sm">
                  <thead className="text-gray-500">
                    <tr>
                      <th className="pb-3">Request ID</th>
                      <th className="pb-3">Amount</th>
                      <th className="pb-3">Status</th>
                      <th className="pb-3">Created</th>
                    </tr>
                  </thead>

                  <tbody className="border-t border-white/10">
                    {deposits.map((deposit) => (
                      <tr
                        key={deposit.id}
                        className="border-t border-white/5"
                      >
                        <td className="py-4">
                          #DEP-{String(deposit.id).padStart(5, "0")}
                        </td>

                        <td>
                          {Number(deposit.amount).toLocaleString("en-US")} USDT
                        </td>

                        <td className="text-orange-400">
                          {deposit.status}
                        </td>

                        <td className="text-gray-400">
                          {deposit.createdAt.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}