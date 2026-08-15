import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050914] text-white">
      <div className="min-h-screen md:flex">
        <Sidebar />

        <section className="min-w-0 flex-1 px-4 pb-8 pt-20 sm:px-6 md:p-8">
          {/* HEADER */}
          <div className="mb-6 md:mb-8">
            <p className="text-xs tracking-[0.2em] text-blue-400">
              TRADER PANEL
            </p>

            <h1 className="mt-1 text-2xl font-bold sm:text-3xl">
              Dashboard
            </h1>
          </div>

          {/* BALANCE CARDS */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
            <Card title="Balance USDT" value="0" />
            <Card title="Balance INR" value="0" />
            <Card title="USD Rate" value="104.5" />
            <Card title="Success Rate" value="0%" />
          </div>

          {/* MAIN BLOCKS */}
          <div className="mt-6 grid grid-cols-1 gap-4 xl:grid-cols-3">
            {/* TRANSACTION VOLUME */}
            <div className="rounded-2xl border border-white/10 bg-[#0b1628] p-4 sm:p-6 xl:col-span-2">
              <h2 className="font-semibold">Transaction Volume</h2>

              <p className="mt-1 text-sm text-gray-500">
                Last 24 hours
              </p>

              <div className="mt-8 flex h-48 items-end gap-2 sm:h-64 sm:gap-3">
                {[30, 45, 38, 55, 48, 68, 60, 78, 65, 84, 72, 92].map(
                  (height, index) => (
                    <div
                      key={index}
                      className="min-w-0 flex-1 rounded-t-lg bg-gradient-to-t from-blue-700 to-cyan-400"
                      style={{ height: `${height}%` }}
                    />
                  ),
                )}
              </div>
            </div>

            {/* APPLICATIONS */}
            <div className="rounded-2xl border border-white/10 bg-[#0b1628] p-4 sm:p-6">
              <h2 className="font-semibold">Applications</h2>

              <div className="mt-8 space-y-5">
                <Status
                  label="Confirmed"
                  value="126"
                  color="text-green-400"
                />

                <Status
                  label="Active"
                  value="18"
                  color="text-blue-400"
                />

                <Status
                  label="Expired"
                  value="7"
                  color="text-orange-400"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function Card({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="min-w-0 rounded-2xl border border-white/10 bg-[#0b1628] p-4 sm:p-5">
      <p className="text-xs leading-5 text-gray-400 sm:text-sm">
        {title}
      </p>

      <p className="mt-3 break-words text-2xl font-bold sm:text-3xl">
        {value}
      </p>
    </div>
  );
}

function Status({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-sm text-gray-400">{label}</span>

      <span className={`font-semibold ${color}`}>
        {value}
      </span>
    </div>
  );
}