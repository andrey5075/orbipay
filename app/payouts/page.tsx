import Sidebar from "../../components/Sidebar";
import { prisma } from "@/lib/prisma";

export default async function PayoutsPage() {
  const confirmedApplication = await prisma.application.findFirst({
    where: {
      status: "confirmed",
    },
  });

  const canTakePayout = Boolean(confirmedApplication);
  return (
    <main className="min-h-screen bg-[#050914] text-white">
      <div className="flex min-h-screen">
        <Sidebar />
        <section className="min-w-0 flex-1 p-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-xs tracking-[0.2em] text-blue-400">
                TRADER PANEL
              </p>
              <h1 className="mt-1 text-3xl font-bold">Payouts</h1>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm">
              Administrator
            </div>
          </div>

          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-5">
            <p className="font-semibold text-red-300">Payouts Enabled</p>
            <p className="mt-1 text-sm text-gray-400">
              Payout operations are available for this account.
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-[#0b1628] p-6">
            <h2 className="text-lg font-semibold">Active Payout</h2>
            <p className="mt-2 text-sm text-gray-500">
              No active payout assigned.
            </p>

            <button
  disabled={!canTakePayout}
  className={`mt-6 rounded-xl px-5 py-3 text-sm font-semibold ${
    canTakePayout
      ? "bg-blue-600 hover:bg-blue-500"
      : "cursor-not-allowed bg-gray-700 text-gray-400"
  }`}
>
  {canTakePayout ? "Take Payout" : "Waiting for confirmation"}
</button>
            
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-[#0b1628] p-6">
            <h2 className="text-lg font-semibold">Payout History</h2>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[700px] text-left text-sm">
                <thead className="text-gray-500">
                  <tr>
                    <th className="pb-3">Payout ID</th>
                    <th className="pb-3">Amount</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3">Beneficiary</th>
                  </tr>
                </thead>

                <tbody className="border-t border-white/10">
                  <tr>
                    
                    
                   
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}