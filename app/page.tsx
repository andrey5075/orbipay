import Sidebar from "../components/Sidebar";


export default function Home() {
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
              <h1 className="mt-1 text-3xl font-bold">Dashboard</h1>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm">
              
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
           <Card title="Balance USDT" value="0" />
<Card title="Balance INR" value="0" />
<Card title="USD Rate" value="104.5" />
<Card title="Success Rate" value="0%" />
          </div>

          <div className="mt-6 grid gap-4 xl:grid-cols-3">
            <div className="xl:col-span-2 rounded-2xl border border-white/10 bg-[#0b1628] p-6">
              <h2 className="font-semibold">Transaction Volume</h2>
              <p className="mt-1 text-sm text-gray-500">Last 24 hours</p>

              <div className="mt-8 flex h-64 items-end gap-3">
                {[30, 45, 38, 55, 48, 68, 60, 78, 65, 84, 72, 92].map(
                  (height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t-lg bg-gradient-to-t from-blue-700 to-cyan-400"
                      style={{ height: `${height}%` }}
                    />
                  )
                )}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0b1628] p-6">
              <h2 className="font-semibold">Applications</h2>

              <div className="mt-8 space-y-5">
                <Status label="Confirmed" value="126" color="text-green-400" />
                <Status label="Active" value="18" color="text-blue-400" />
                <Status label="Expired" value="7" color="text-orange-400" />
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
    <div className="rounded-2xl border border-white/10 bg-[#0b1628] p-5">
      <p className="text-sm text-gray-400">{title}</p>
      <p className="mt-3 text-2xl font-bold">{value}</p>
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
    <div className="flex justify-between">
      <span className="text-gray-400">{label}</span>
      <span className={`font-semibold ${color}`}>{value}</span>
    </div>
  );
}