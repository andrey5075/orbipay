import Sidebar from "../../components/Sidebar";

export default function ProfilePage() {
  return (
    <main className="min-h-screen text-white">
      <div className="flex min-h-screen">
        <Sidebar />

        <section className="min-w-0 flex-1 p-8">
          <div className="mx-auto max-w-6xl">

            {/* HEADER */}
            <div>
              <p className="text-xs tracking-[0.2em] text-blue-400">
                ACCOUNT
              </p>

              <h1 className="mt-1 text-3xl font-bold">
                Profile
              </h1>

              <p className="mt-2 text-sm text-gray-400">
                Account information, commissions, limits and current status
              </p>
            </div>

            {/* TOP CARDS */}
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">

              {/* WORK */}
              <div className="rounded-3xl border border-cyan-500/20 bg-[#0b1628]/90 p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-400">
                      Work %
                    </p>

                    <p className="mt-5 text-3xl font-bold text-blue-400">
                      5.2%
                    </p>

                    <p className="mt-2 text-xs text-gray-500">
                      Current account work rate
                    </p>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 text-xl text-blue-400">
                    %
                  </div>
                </div>
              </div>

              {/* SECURITY DEPOSIT */}
              <div className="rounded-3xl border border-cyan-500/20 bg-[#0b1628]/90 p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-400">
                      Security Deposit
                    </p>

                    <p className="mt-5 text-3xl font-bold">
                      1,000 USDT
                    </p>

                    <p className="mt-2 text-xs text-gray-500">
                      Current security deposit amount
                    </p>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400">
                    ◆
                  </div>
                </div>
              </div>

              {/* PAYOUT LIMIT */}
              <div className="rounded-3xl border border-cyan-500/20 bg-[#0b1628]/90 p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-400">
                      Payout Limit
                    </p>

                    <p className="mt-5 text-3xl font-bold">
                      1,000 USDT
                    </p>

                    <p className="mt-2 text-xs text-gray-500">
                      Maximum payout limit per day
                    </p>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                    $
                  </div>
                </div>
              </div>
            </div>

            {/* COMMISSIONS */}
            <div className="mt-6 rounded-3xl border border-white/10 bg-[#0b1628]/90 p-6">
              <div>
                <h2 className="text-lg font-semibold">
                  Commissions
                </h2>

                <p className="mt-1 text-xs text-gray-500">
                  Current deposit and payout commissions
                </p>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">

                {/* DEPOSIT COMMISSION */}
                <div className="rounded-2xl bg-white/5 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-400">
Deposit Commission
                      </p>

                      <p className="mt-2 text-2xl font-semibold text-green-400">
                        5%
                      </p>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/10 text-green-400">
                      ↓
                    </div>
                  </div>
                </div>

                {/* PAYOUT COMMISSION */}
                <div className="rounded-2xl bg-white/5 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-400">
                        Payout Commission
                      </p>

                      <p className="mt-2 text-2xl font-semibold text-blue-400">
                        2%
                      </p>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                      ↑
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ACCOUNT DETAILS */}
            <div className="mt-6 rounded-3xl border border-white/10 bg-[#0b1628]/90 p-6">
              <div>
                <h2 className="text-lg font-semibold">
                  Account Details
                </h2>

                <p className="mt-1 text-xs text-gray-500">
                  Current profile parameters
                </p>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">

                {/* WORK COMMISSION */}
                <div className="rounded-2xl bg-white/5 p-5">
                  <p className="text-xs text-gray-400">
                    Work commission
                  </p>

                  <p className="mt-2 text-lg font-semibold">
                    5.2%
                  </p>
                </div>

                {/* SECURITY RESERVE */}
                <div className="rounded-2xl bg-white/5 p-5">
                  <p className="text-xs text-gray-400">
                    Security reserve
                  </p>

                  <p className="mt-2 text-lg font-semibold">
                    1,000 USDT
                  </p>
                </div>

                {/* DAILY PAYOUT */}
                <div className="rounded-2xl bg-white/5 p-5">
                  <p className="text-xs text-gray-400">
                    Daily payout limit
                  </p>

                  <p className="mt-2 text-lg font-semibold">
                    1,000 USDT / day
                  </p>
                </div>

                {/* ACCOUNT STATUS */}
                <div className="rounded-2xl bg-white/5 p-5">
                  <p className="text-xs text-gray-400">
                    Account availability
                  </p>

                  <p className="mt-2 text-lg font-semibold text-green-400">
                    Available
                  </p>
                </div>

                {/* DEPOSIT */}
                <div className="rounded-2xl bg-white/5 p-5">
                  <p className="text-xs text-gray-400">
                    Deposit commission
                  </p>

                  <p className="mt-2 text-lg font-semibold text-green-400">
                    5%
                  </p>
                </div>

                {/* PAYOUT */}
                <div className="rounded-2xl bg-white/5 p-5">
                  <p className="text-xs text-gray-400">
                    Payout commission
                  </p>

                  <p className="mt-2 text-lg font-semibold text-blue-400">
                    2%
                  </p>
                </div>

              </div>
            </div>

          </div>
        </section>
      </div>
    </main>
  );
}