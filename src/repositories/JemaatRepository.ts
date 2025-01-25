import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findAllJemaat = async () => {
  return await prisma.jemaat.findMany();
};

export const createJemaat = async (data: any) => {
  return await prisma.jemaat.create({ data });
};
