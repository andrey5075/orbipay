
"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createApplication(formData: FormData) {
  const title = String(formData.get("title") || "").trim();
  const amountRaw = String(formData.get("amount") || "").trim();

  if (!title) {
    throw new Error("Method is required");
  }

  await prisma.application.create({
    data: {
      title,
      amount: amountRaw ? Number(amountRaw) : null,
      status: "pending",
    },
  });

  revalidatePath("/applications");
}
export async function updateApplicationStatus(
  id: number,
  status: string
) {
  const allowedStatuses = [
    "pending",
    "active",
    "confirmed",
    "expired",
  ];

  if (!allowedStatuses.includes(status)) {
    throw new Error("Invalid status");
  }

  await prisma.application.update({
    where: {
      id,
    },
    data: {
      status,
    },
  });

  revalidatePath("/applications");
}