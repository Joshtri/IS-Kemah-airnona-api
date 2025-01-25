import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findAllKartuKeluarga = async () => {
  return await prisma.kartuKeluarga.findMany();
};

export const createKartuKeluarga = async (data: any) => {
  return await prisma.kartuKeluarga.create({ data });
};
