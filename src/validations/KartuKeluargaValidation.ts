import {z} from "zod";

export const createKartuKeluargaSchema = z.object({  
  nama_kartu_keluarga: z.string().min(1, "Nama kartu keluarga harus diisi"),  
  alamat_keluarga: z.string().min(1, "Alamat kartu keluarga harus diisi"),  
  nomor_kartu_keluarga: z.string().max(16, "Nomor kartu keluarga tidak boleh lebih dari 16 karakter"),  
  jemaat: z.number().int()  
});  