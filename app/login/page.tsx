"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          login,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Неверный логин или пароль");
        return;
      }

      localStorage.setItem("orbipay-demo-auth", "true");
      localStorage.setItem("orbipay-user", data.user.username);
      localStorage.setItem("orbipay-role", data.user.role);

      document.cookie =
        "orbipay-demo-auth=true; path=/; max-age=86400; samesite=lax";

      router.push("/");
      router.refresh();
    } catch {
      setError("Не удалось подключиться к серверу");
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050914] px-4 text-white">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#0b1628] p-8">

        <div className="text-center">
          <div className="text-3xl font-bold">
            Orbi<span className="text-blue-400">Pay</span>
          </div>
        </div>

        <form onSubmit={handleLogin} className="mt-8 space-y-4">

          <div>
            <label className="mb-2 block text-sm text-gray-400">
              Login
            </label>

            <input
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              type="text"
              placeholder="Enter login"
              className="w-full rounded-xl border border-white/10 bg-[#07101f] px-4 py-3 outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-400">
              Password
            </label>

            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter password"
              className="w-full rounded-xl border border-white/10 bg-[#07101f] px-4 py-3 outline-none"
            />
          </div>

          {error && (
            <p className="text-sm text-red-400">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 px-5 py-3 font-semibold"
          >
            Sign In
          </button>

        </form>
      </div>
    </main>
  );
}