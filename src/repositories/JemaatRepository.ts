import { PrismaClient } from "@prisma/client";
import  type { Jemaat, JemaatCreateInput, JemaatUpdateInput } from "../types/jemaat";  

const prisma = new PrismaClient();

export const findAllJemaatRepo = async (): Promise<Jemaat[]> => {  
  return await prisma.jemaat.findMany();  
};  

export const createJemaatRepo = async (data: JemaatCreateInput) => {  
  return await prisma.jemaat.create({ data });  
};  

export const updateJemaatRepo = async (id: number, data: JemaatUpdateInput) => {
  return await prisma.jemaat.update({ where: { id }, data });
}

export const deleteJemaatRepo = async (id: number) => {
  return await prisma.jemaat.delete({ where: { id } });
}
