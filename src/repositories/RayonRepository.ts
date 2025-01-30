import { PrismaClient } from "@prisma/client";
import type { Rayon, RayonCreateInput, RayonUpdateInput } from "../types/rayon";

const prisma = new PrismaClient();

export const findAllRayonRepo = async () : Promise<Rayon[]> => {
  // const prisma = new PrismaClient();
  return await prisma.rayon.findMany({
    include: {
      jemaat: true,
    },
  });
};

export const createRayonRepo = async (data: RayonCreateInput) => {
  // const prisma = new PrismaClient();
  return await prisma.rayon.create({ data });
};

export const updateRayonRepo = async (id: number, data: RayonUpdateInput) => {
  return await prisma.rayon.update({ where: { id }, data });
};

export const deleteRayonRepo = async (id: number) => {
  return await prisma.rayon.delete({ where: { id } });
};

export const findRayonByIdRepo = async (id: number) => {
  return await prisma.rayon.findUnique({ where: { id } });
}