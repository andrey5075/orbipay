"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const operations = [
  { label: "Dashboard", href: "/", icon: "⌂" },
  { label: "Payouts", href: "/payouts", icon: "↗" },
  { label: "Applications", href: "/applications", icon: "▣" },
  { label: "Deposit Requests", href: "/deposits", icon: "↳" },
  { label: "Requisites", href: "/requisites", icon: "▰" },
];

const tools = [
  { label: "Transactions", href: "/transactions", icon: "⇄" },
  { label: "Reports", href: "/reports", icon: "▾" },
];

const account = [
  { label: "Profile", href: "/profile", icon: "⚙" },
  { label: "Support", href: "/support", icon: "?" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

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
      pathname === href || (href !== "/" && pathname.startsWith(href + "/"));

    return (
      <Link
        href={href}
        onClick={() => setOpen(false)}
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
    <>
      {/* MOBILE MENU BUTTON */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="fixed left-4 top-4 z-[60] flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#07101f]/95 text-2xl text-white shadow-lg backdrop-blur md:hidden"
        aria-label="Open menu"
      >
        {open ? "×" : "☰"}
      </button>

      {/* MOBILE DARK BACKGROUND */}
      {open && (
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 shrink-0 transform flex-col overflow-y-auto border-r border-white/10 bg-[#07101f] p-5 pt-16 transition-transform duration-300 md:static md:z-auto md:w-64 md:translate-x-0 md:pt-5 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* LOGO */}
        <div className="mb-8">
          <div className="text-2xl font-bold text-white">
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
    </>
  );
} 