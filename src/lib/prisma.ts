import { PrismaClient } from "@prisma/client";

// Declare a global type to hold the Prisma instance (avoids hot reload issues)
const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

// Create a single Prisma client instance
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query", "error", "warn"],
  });

// Prevent creating new Prisma clients on every Next.js reload (dev mode)
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
