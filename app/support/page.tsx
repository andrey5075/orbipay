import Sidebar from "../../components/Sidebar";

export default function SupportPage() {
  return (
    <main className="min-h-screen text-white">
      <div className="flex min-h-screen">
        <Sidebar />

        <section className="flex min-w-0 flex-1 items-center justify-center p-8">
          <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-[#0b1628]/90 p-10 text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20 text-3xl">
              ✈
            </div>

            <h1 className="mt-6 text-3xl font-bold">
              Technical Support
            </h1>

            <p className="mx-auto mt-4 max-w-lg text-gray-400">
              If you have any questions or experience any issues,
              please contact our support team on Telegram.
            </p>

            <a
              href="https://t.me/OrbiPayments"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-500"
            >
              Contact us on Telegram
            </a>

            <p className="mt-4 text-sm text-gray-500">
              Telegram: @OrbiPayments
            </p>

          </div>
        </section>
      </div>
    </main>
  );
}