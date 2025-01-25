import { PrismaClient } from "@prisma/client";


export const findAllRayon = async () => {
  const prisma = new PrismaClient();
  return await prisma.rayon.findMany();
};

export const createRayon = async (data: any) => {
  const prisma = new PrismaClient();
  return await prisma.rayon.create({ data });
};

