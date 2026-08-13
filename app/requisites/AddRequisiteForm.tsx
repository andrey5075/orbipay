"use client";

import { useState } from "react";

type Requisite = {
  id: number;
  type: "UPI" | "IMPS";
  name: string;
  details: string;
  dailyLimit: number;
};

type Props = {
  onCreate: (requisite: Requisite) => void;
};

export default function AddRequisiteForm({ onCreate }: Props) {
  const [type, setType] = useState<"UPI" | "IMPS">("UPI");
  const [name, setName] = useState("");
  const [upi, setUpi] = useState("");
  const [account, setAccount] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [dailyLimit, setDailyLimit] = useState("");

  function handleCreate() {
    if (!name || !dailyLimit) {
      alert("Заполни имя и дневной лимит");
      return;
    }

    if (type === "UPI" && !upi) {
      alert("Введи UPI ID");
      return;
    }

    if (type === "IMPS" && (!account || !ifsc)) {
      alert("Введи номер счёта и IFSC");
      return;
    }

    const details =
      type === "UPI"
        ? upi
        : `${account} / ${ifsc}`;

    onCreate({
      id: Date.now(),
      type,
      name,
      details,
      dailyLimit: Number(dailyLimit),
    });

    setName("");
    setUpi("");
    setAccount("");
    setIfsc("");
    setDailyLimit("");
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-[#0b1628] p-6">
      <h2 className="text-xl font-semibold">
        Add New Requisite
      </h2>

      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={() => setType("UPI")}
          className={`rounded-xl px-4 py-2 text-sm ${
            type === "UPI"
              ? "bg-blue-600 text-white"
              : "border border-white/10 text-gray-400"
          }`}
        >
          UPI
        </button>

        <button
          type="button"
          onClick={() => setType("IMPS")}
          className={`rounded-xl px-4 py-2 text-sm ${
            type === "IMPS"
              ? "bg-blue-600 text-white"
              : "border border-white/10 text-gray-400"
          }`}
        >
          IMPS
        </button>
      </div>

      <div className="mt-6 space-y-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Account Holder Name"
          className="w-full rounded-xl border border-white/10 bg-[#07101f] px-4 py-3 outline-none"
        />

        {type === "UPI" ? (
          <input
            value={upi}
            onChange={(e) => setUpi(e.target.value)}
            type="text"
            placeholder="UPI ID"
            className="w-full rounded-xl border border-white/10 bg-[#07101f] px-4 py-3 outline-none"
          />
        ) : (
          <>
            <input
              value={account}
              onChange={(e) => setAccount(e.target.value)}
              type="text"
              placeholder="Bank Account Number"
              className="w-full rounded-xl border border-white/10 bg-[#07101f] px-4 py-3 outline-none"
            />

            <input
              value={ifsc}
              onChange={(e) => setIfsc(e.target.value)}
              type="text"
              placeholder="IFSC Code"
              className="w-full rounded-xl border border-white/10 bg-[#07101f] px-4 py-3 outline-none"
            />
          </>
        )}

        <input
          value={dailyLimit}
          onChange={(e) => setDailyLimit(e.target.value)}
          type="number"
          placeholder="Daily Limit"
          className="w-full rounded-xl border border-white/10 bg-[#07101f] px-4 py-3 outline-none"
        />
      </div>

      <button
        type="button"
        onClick={handleCreate}
        className="mt-6 w-full rounded-xl bg-blue-600 px-5 py-3 font-semibold"
      >
        Create Requisite
      </button>
    </div>
  );
}
