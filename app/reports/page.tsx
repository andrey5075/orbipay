import Sidebar from "../../components/Sidebar";
import { prisma } from "@/lib/prisma";

export default async function ReportsPage() {
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

  const totalDeposits = deposits.reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );

  const totalPayouts = payouts.reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );

  const netVolume = totalDeposits - totalPayouts;
  const totalOperations = deposits.length + payouts.length;

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
              Reports
            </h1>

            <p className="mt-2 text-sm text-gray-400">
              Account activity and transaction statistics
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-3xl border border-green-500/20 bg-[#0b1628]/90 p-6">
                <p className="text-sm text-gray-400">
                  Total Deposits
                </p>

                <p className="mt-3 text-2xl font-bold text-green-400">
                  ${totalDeposits.toLocaleString("en-US")}
                </p>

                <p className="mt-2 text-xs text-gray-500">
                  {deposits.length} operations
                </p>
              </div>

              <div className="rounded-3xl border border-blue-500/20 bg-[#0b1628]/90 p-6">
                <p className="text-sm text-gray-400">
                  Total Payouts
                </p>

                <p className="mt-3 text-2xl font-bold text-blue-400">
                  ${totalPayouts.toLocaleString("en-US")}
                </p>

                <p className="mt-2 text-xs text-gray-500">
                  {payouts.length} operations
                </p>
              </div>

              <div className="rounded-3xl border border-purple-500/20 bg-[#0b1628]/90 p-6">
                <p className="text-sm text-gray-400">
                  Net Volume
                </p>

                <p className="mt-3 text-2xl font-bold">
                  ${netVolume.toLocaleString("en-US")}
                </p>

                <p className="mt-2 text-xs text-gray-500">
                  Deposits minus payouts
                </p>
              </div>

              <div className="rounded-3xl border border-cyan-500/20 bg-[#0b1628]/90 p-6">
                <p className="text-sm text-gray-400">
                  Total Operations
                </p>

                <p className="mt-3 text-2xl font-bold text-cyan-400">
                  {totalOperations}
                </p>

                <p className="mt-2 text-xs text-gray-500">
                  All transaction types
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-[#0b1628]/90 p-6">
                <h2 className="text-lg font-semibold">
                  Deposit Activity
                </h2>

                <p className="mt-5 text-4xl font-bold text-green-400">
                  {deposits.length}
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  Total deposit requests
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-[#0b1628]/90 p-6">
                <h2 className="text-lg font-semibold">
                  Payout Activity
                </h2>

                <p className="mt-5 text-4xl font-bold text-blue-400">
                  {payouts.length}
</p>

                <p className="mt-2 text-sm text-gray-500">
                  Total payout operations
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-[#0b1628]/90 p-6">
              <h2 className="text-lg font-semibold">
                Summary
              </h2>

              <div className="mt-5 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-gray-400">
                    Deposits
                  </span>

                  <span className="font-semibold text-green-400">
                    ${totalDeposits.toLocaleString("en-US")}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-gray-400">
                    Payouts
                  </span>

                  <span className="font-semibold text-blue-400">
                    ${totalPayouts.toLocaleString("en-US")}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-400">
                    Net Volume
                  </span>

                  <span className="font-semibold">
                    ${netVolume.toLocaleString("en-US")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}