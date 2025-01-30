import { PrismaClient } from "@prisma/client";
import  type { Jemaat, JemaatCreateInput, JemaatUpdateInput } from "../types/jemaat";  

const prisma = new PrismaClient();

export const findAllJemaatRepo = async (): Promise<Jemaat[]> => {  
  return await prisma.jemaat.findMany();  
};  

export const createJemaatRepo = async (data: JemaatCreateInput) => {  
  return await prisma.jemaat.create({ data });  
};  

export const findJemaatByIdRepo = async (id: number): Promise<Jemaat | null> => {
  return await prisma.jemaat.findUnique({ where: { id } });
}


// export const updateJemaatRepo = async (id: number, data: JemaatUpdateInput) => {
//   return await prisma.jemaat.update({ where: { id }, data });
// }

export const updateJemaatRepo = async (id: number, data: JemaatUpdateInput) => {
  return await prisma.jemaat.update({
    where: {
        id: id, // Gunakan id yang diterima sebagai parameter
    },
    data: {
        nama_jemaat: data.nama_jemaat,
        tanggal_lahir: data.tanggal_lahir ? new Date(data.tanggal_lahir) : undefined, // Konversi ke Date
        alamat: data.alamat,
        nomor_telepon: data.nomor_telepon,
        email: data.email,
        status_keanggotaan: data.status_keanggotaan,
        kartu_keluargaid: data.kartu_keluargaid,
        rayonId: data.rayonId,
    },
});
};

export const deleteJemaatRepo = async (id: number) => {
  return await prisma.jemaat.delete({ where: { id } });
}
