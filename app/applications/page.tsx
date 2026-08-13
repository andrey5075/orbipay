import Sidebar from "../../components/Sidebar";
import { prisma } from "@/lib/prisma";
import {
  createApplication,
  updateApplicationStatus,
} from "./actions";

export default async function ApplicationsPage() {
  const applications = await prisma.application.findMany({
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
              <p className="text-xs text-blue-400">TRADER PANEL</p>
              <h1 className="mt-1 text-3xl font-bold">Applications</h1>
            </div>

            <div className="rounded-xl border border-blue-500/30 px-4 py-2 text-blue-300">
              Total: {applications.length}
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-[#0b1628] p-6">
            <form
              action={createApplication}
              className="mb-6 flex flex-wrap gap-4"
            >
              <input
                name="title"
                placeholder="Method, например UPI"
                required
                className="rounded-xl border border-white/10 bg-black/20 px-4 py-3"
              />

              <input
                name="amount"
                type="number"
                min="0"
                step="0.01"
                placeholder="Amount"
                className="rounded-xl border border-white/10 bg-black/20 px-4 py-3"
              />

              <button
                type="submit"
                className="rounded-xl bg-blue-500 px-5 py-3 font-semibold"
              >
                Add application
              </button>
            </form>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] text-left">
                <thead className="text-gray-400">
                  <tr>
                    <th className="pb-3">ID</th>
                    <th className="pb-3">Method</th>
                    <th className="pb-3">Amount</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3">Created</th>
                  </tr>
                </thead>

                <tbody>
                  {applications.map((application) => (
                    <tr
                      key={application.id}
                      className="border-t border-white/10"
                    >
                      <td className="py-4">
                        #APP-{String(application.id).padStart(5, "0")}
                      </td>

                      <td>{application.title}</td>

                      <td>
                        {application.amount
                          ? `₹${Number(application.amount).toLocaleString("en-IN")}`
                          : "—"}
                      </td>

                      <td>
  <div className="flex flex-wrap gap-2">
    <form
      action={async () => {
        "use server";
        await updateApplicationStatus(application.id, "active");
      }}
    >
      <button
        type="submit"
        className="rounded-lg bg-blue-500/20 px-3 py-1 text-xs text-blue-300"
      >
        Active
      </button>
    </form>

    <form
      action={async () => {
        "use server";
        await updateApplicationStatus(application.id, "confirmed");
      }}
    >
      <button
        type="submit"
        className="rounded-lg bg-green-500/20 px-3 py-1 text-xs text-green-300"
      >
        Confirmed
      </button>
    </form>

    <form
      action={async () => {
        "use server";
        await updateApplicationStatus(application.id, "expired");
      }}
    >
      <button
        type="submit"
        className="rounded-lg bg-orange-500/20 px-3 py-1 text-xs text-orange-300"
      >
        Expired
      </button>
    </form>
  </div>
</td>
</tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
</div>
</main>
  );
}