"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function createDepositRequest(formData: FormData) {
  const amountRaw = String(formData.get("amount") || "").trim();

  if (!amountRaw) {
    throw new Error("Amount is required");
  }

  const amount = Number(amountRaw);

  if (!Number.isFinite(amount) || amount <= 0) {
    throw new Error("Invalid amount");
  }

  const deposit = await prisma.depositRequest.create({
    data: {
      amount,
      status: "pending",
    },
  });

  redirect(`/deposits/pay/${deposit.id}`);
}