"use client";

import { useState } from "react";

export default function CopyWalletButton({
  wallet,
}: {
  wallet: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copyWallet() {
    await navigator.clipboard.writeText(wallet);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  }

  return (
    <button
      type="button"
      onClick={copyWallet}
      className="mt-3 w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold transition hover:bg-blue-500"
    >
      {copied ? "Copied ✓" : "Copy address"}
    </button>
  );
}