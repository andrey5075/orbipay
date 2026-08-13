import { notFound } from "next/navigation";
import QRCode from "qrcode";
import CopyWalletButton from "../../../../components/CopyWalletButton";
import Sidebar from "../../../../components/Sidebar";
import { prisma } from "@/lib/prisma";

const TEST_WALLET = "TSM8tF7vPZmK4y75hP7SFqp6gdR8LVfgaS";

export default async function DepositPaymentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const depositId = Number(id);

  if (!Number.isInteger(depositId)) {
    notFound();
  }

  const deposit = await prisma.depositRequest.findUnique({
    where: {
      id: depositId,
    },
  });

  if (!deposit) {
    notFound();
  }

  const amount = Number(deposit.amount);

  const qrPayload = `USDT TRC20
Wallet: ${TEST_WALLET}
Amount: ${amount}`;

  const qrCode = await QRCode.toDataURL(qrPayload, {
    width: 300,
    margin: 2,
  });

  return (
    <main className="min-h-screen bg-[#050914] text-white">
      <div className="flex min-h-screen">
        <Sidebar />

        <section className="min-w-0 flex-1 p-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs tracking-[0.2em] text-blue-400">
              DEPOSIT PAYMENT
            </p>

            <h1 className="mt-1 text-3xl font-bold">
              Complete your deposit
            </h1>

            <p className="mt-2 text-sm text-gray-400">
              Send the exact amount to the address below.
            </p>

            <div className="mt-8 grid gap-6 lg:grid-cols-[320px_1fr]">
              <div className="rounded-3xl border border-white/10 bg-[#0b1628] p-6">
                <div className="rounded-2xl bg-white p-4">
                  <img
  src="/deposit-qr.jpg"
  alt="Deposit QR code"
  className="h-auto w-full"
/>
                </div>

                <div className="mt-5 text-center">
                  <p className="text-sm text-gray-400">
                    Scan to pay
                  </p>

                  <p className="mt-1 text-lg font-semibold">
                    USDT TRC20
                  </p>
                </div>
              </div>

              <div className="space-y-4 rounded-3xl border border-white/10 bg-[#0b1628] p-6">
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Deposit request
                  </p>

                  <p className="mt-1 font-semibold">
                    #DEP-{String(deposit.id).padStart(5, "0")}
                  </p>
                </div>

                <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-4">
                  <p className="text-xs text-gray-400">
                    Amount to send
                  </p>

                  <p className="mt-1 text-3xl font-bold">
                    {amount.toLocaleString("en-US")} USDT
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs text-gray-500">
                    Network
                  </p>

                  <p className="mt-1 font-semibold text-green-400">
                    TRC20
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs text-gray-500">
                    Wallet address
                  </p>

                  <p className="mt-2 break-all font-mono text-sm">
                    <CopyWalletButton wallet={TEST_WALLET} />

                  </p>
                </div>

                <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-4">
                  <p className="text-sm font-semibold text-yellow-400">
                    Important
                  </p>

                  <p className="mt-1 text-sm text-gray-300">
                    Send only USDT using the TRC20 network. Sending another
                    asset or using another network may result in loss of funds.
                  </p>
                </div>

                <div


className="rounded-2xl border border-orange-500/20 bg-orange-500/5 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500">
                        Status
                      </p>

                      <p className="mt-1 font-semibold text-orange-400">
                        {deposit.status}
                      </p>
                    </div>

                    <div className="h-3 w-3 rounded-full bg-orange-400" />
                  </div>

                  <p className="mt-2 text-xs text-gray-400">
                    Waiting for payment confirmation.
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