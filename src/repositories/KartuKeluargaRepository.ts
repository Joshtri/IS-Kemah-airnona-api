import { PrismaClient } from "@prisma/client";

import type { KartuKeluarga, KartuKeluargaCreateInput, KartuKeluargaUpdateInput } from "../types/kartuKeluarga";
const prisma = new PrismaClient();

export const findAllKartuKeluargaRepo = async () : Promise<KartuKeluarga[]> => {
  return await prisma.kartuKeluarga.findMany({
    include: {
      jemaat: true,
    },
  });
};

export const createKartuKeluargaRepo = async (data: KartuKeluargaCreateInput) => {
  return await prisma.kartuKeluarga.create({ data });
};

export const updateKartuKeluargaRepo = async (id: number, data: KartuKeluargaUpdateInput) => {
  return await prisma.kartuKeluarga.update({ where: { id }, data });
};

export const deleteKartuKeluargaRepo = async (id: number) => {
  return await prisma.kartuKeluarga.delete({ where: { id } });
};