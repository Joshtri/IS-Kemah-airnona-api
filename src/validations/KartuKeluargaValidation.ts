import {z} from "zod";

export const createKartuKeluargaSchema = z.object({  
  nama_kepala_keluarga: z.string().min(1, "Nama kepala keluarga harus diisi"),  
  alamat_keluarga: z.string().min(1, "Alamat kartu keluarga harus diisi"),  
  nomor_telepon_keluarga: z.string().min(1, "Nomor Telepon keluarga tidak boleh kosong"),  
  // jemaat: z.number().int()  
});  