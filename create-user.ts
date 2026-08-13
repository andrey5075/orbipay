import "dotenv/config";
import bcrypt from "bcryptjs";
import { prisma } from "./lib/prisma";

const username = process.argv[2];
const password = process.argv[3];
const role = process.argv[4] || "user";

async function main() {
  if (!username || !password) {
    console.log(
      "Usage: npx tsx create-user.ts <username> <password> [role]"
    );
    process.exit(1);
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      username: username,
    },
  });

  if (existingUser) {
    console.log(`User "${username}" already exists.`);
    return;
  }

  const passwordHash = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      username: username,
      passwordHash: passwordHash,
      role: role,
    },
  });

  console.log("User created successfully!");
  console.log("ID:", user.id);
  console.log("Username:", user.username);
  console.log("Role:", user.role);
}

main()
  .catch((error) => {
    console.error("ERROR:");
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });