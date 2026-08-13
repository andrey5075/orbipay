"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const operations = [
  { label: "Dashboard", href: "/", icon: "⌂" },
  { label: "Payouts", href: "/payouts", icon: "↗" },
  { label: "Applications", href: "/applications", icon: "▣" },
  { label: "Deposit Requests", href: "/deposits", icon: "↓" },
  { label: "Requisites", href: "/requisites", icon: "▤" },
];

const tools = [
  { label: "Transactions", href: "/transactions", icon: "⇄" },
  { label: "Reports", href: "/reports", icon: "▥" },
];

const account = [
  { label: "Profile", href: "/profile", icon: "○" },
  { label: "Support", href: "/support", icon: "?" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  function handleLogout() {
    localStorage.removeItem("orbipay-demo-auth");
    localStorage.removeItem("orbipay-user");
    localStorage.removeItem("orbipay-role");

    document.cookie =
      "orbipay-demo-auth=; path=/; max-age=0; samesite=lax";

    router.push("/login");
    router.refresh();
  }

  function MenuItem({
    label,
    href,
    icon,
  }: {
    label: string;
    href: string;
    icon: string;
  }) {
    const active =
      pathname === href ||
      (href !== "/" && pathname.startsWith(href + "/"));

    return (
      <Link
        href={href}
        className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${
          active
            ? "bg-blue-500/15 text-blue-300"
            : "text-gray-300 hover:bg-blue-500/10 hover:text-blue-300"
        }`}
      >
        <span className="w-5 text-center text-lg text-gray-400">
          {icon}
        </span>

        <span>{label}</span>
      </Link>
    );
  }

  return (
    <aside className="flex w-64 shrink-0 flex-col border-r border-white/10 bg-[#07101f] p-5">

      {/* LOGO */}
      <div className="mb-8">
        <div className="text-2xl font-bold">
          Orbi<span className="text-blue-400">Pay</span>
        </div>

        <div className="mt-1 text-xs tracking-[0.2em] text-gray-500">
          PAYMENT SYSTEM
        </div>
      </div>

      {/* MENU */}
      <nav className="flex-1 space-y-7">

        {/* OPERATIONS */}
        <div>
          <p className="mb-2 px-4 text-xs font-semibold tracking-[0.15em] text-gray-600">
            OPERATIONS
          </p>

          <div className="space-y-1">
            {operations.map((item) => (
              <MenuItem
                key={item.href}
                label={item.label}
                href={item.href}
                icon={item.icon}
              />
            ))}
          </div>
        </div>

        {/* TOOLS */}
        <div>
          <p className="mb-2 px-4 text-xs font-semibold tracking-[0.15em] text-gray-600">
            TOOLS
          </p>

          <div className="space-y-1">
            {tools.map((item) => (
              <MenuItem
                key={item.href}
                label={item.label}
                href={item.href}
                icon={item.icon}
              />
            ))}
          </div>
        </div>

        {/* ACCOUNT */}
        <div>
          <p className="mb-2 px-4 text-xs font-semibold tracking-[0.15em] text-gray-600">
            ACCOUNT
          </p>

          <div className="space-y-1">
            {account.map((item) => (
              <MenuItem
                key={item.href}
                label={item.label}
                href={item.href}
                icon={item.icon}
              />
            ))}
          </div>
        </div>

      </nav>

      {/* LOGOUT */}
      <button
        type="button"
        onClick={handleLogout}
        className="mt-8 w-full rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-left text-sm text-red-400 transition hover:bg-red-500/10"
      >
        ↪ &nbsp; Logout
      </button>

    </aside>
  );
}