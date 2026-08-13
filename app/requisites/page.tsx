"use client";

import Sidebar from "../../components/Sidebar";
import { useEffect, useState } from "react";
import AddRequisiteForm from "./AddRequisiteForm";
type Requisite = {
  id: number;
  type: "UPI" | "IMPS";
  name: string;
  details: string;
  dailyLimit: number;
};

export default function RequisitesPage() {
  const [showForm, setShowForm] = useState(false);
  const [requisites, setRequisites] = useState<Requisite[]>([]);
useEffect(() => {
  const saved = localStorage.getItem("orbipay-requisites");

  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      setRequisites(parsed);
    } catch {
      console.error("Failed to load requisites");
    }
  }
}, []);

useEffect(() => {
  localStorage.setItem(
    "orbipay-requisites",
    JSON.stringify(requisites)
  );
}, [requisites]);
  const totalLimit = requisites.reduce(
    (sum, item) => sum + item.dailyLimit,
    0
  );

  function addRequisite(requisite: Requisite) {
    setRequisites((current) => [...current, requisite]);
    setShowForm(false);
  }

  return (
    <main className="min-h-screen bg-[#050914] text-white">
      <div className="flex min-h-screen">
        <Sidebar />
        <section className="flex-1 p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs tracking-[0.2em] text-blue-400">
                TRADER PANEL
              </p>

              <h1 className="mt-1 text-3xl font-bold">
                My Requisites
              </h1>
            </div>

            <button
              type="button"
              onClick={() => setShowForm(!showForm)}
              className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold"
            >
              + Add Requisite
            </button>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-[#0b1628] p-5">
              <p className="text-sm text-gray-400">
                Total Requisites
              </p>
              <p className="mt-3 text-3xl font-bold">
                {requisites.length}
              </p>
            </div>

            <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-5">
              <p className="text-sm text-gray-400">
                Active
              </p>
              <p className="mt-3 text-3xl font-bold text-green-400">
                {requisites.length}
              </p>
            </div>

            <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5">
              <p className="text-sm text-gray-400">
                Total Daily Limit
              </p>
              <p className="mt-3 text-3xl font-bold text-blue-300">
                ₹{totalLimit.toLocaleString()}
              </p>
            </div>
          </div>

          {requisites.length === 0 ? (
            <div className="mt-6 rounded-2xl border border-white/10 bg-[#0b1628] p-6 text-center">
              <p className="text-gray-400">
                You don't have any requisites yet.
              </p>


<button
                type="button"
                onClick={() => setShowForm(true)}
                className="mt-4 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold"
              >
                + Add First Requisite
              </button>
            </div>
          ) : (
            <div className="mt-6 rounded-2xl border border-white/10 bg-[#0b1628] p-6">
              <h2 className="text-lg font-semibold">
                Requisites List
              </h2>

              <div className="mt-4 space-y-3">
                {requisites.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-xl border border-white/10 bg-[#07101f] p-4"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">
                          {item.name}
                        </p>
                        <p className="mt-1 text-sm text-gray-400">
                          {item.type} · {item.details}
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-sm text-gray-400">
                          Daily Limit
                        </p>
                        <p className="font-semibold">
                          ₹{item.dailyLimit.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {showForm && (
            <div className="mt-6">
              <AddRequisiteForm onCreate={addRequisite} />
            </div>
          )}
        </section>
      </div>
    </main>
  );
}