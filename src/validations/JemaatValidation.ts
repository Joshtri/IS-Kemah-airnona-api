import { z } from "zod";

export const createJemaatSchema = z.object({
  nama_jemaat: z.string().min(1, "Nama jemaat harus diisi"),  
  tanggal_lahir: z.date(),  
  alamat: z.string().min(1, "Alamat harus diisi"),  
  nomor_telepon: z.string().min(1, "Nomor telepon harus diisi"),  
  email: z.string().email("Email tidak valid").min(1, "Email harus diisi"),  
  status_keanggotaan: z.enum(["AKTIF", "NONAKTIF"], {  
    invalid_type_error: "Status keanggotaan harus AKTIF atau NONAKTIF",  
  }),  
  kartu_keluargaid: z.number().int(),  
  rayonId: z.number().int(),  
});


export const updateJemaatSchema = z.object({  
  nama_jemaat: z.string().min(1, "Nama jemaat harus diisi").optional(),  
  tanggal_lahir: z.date().optional(),  
  alamat: z.string().min(1, "Alamat harus diisi").optional(),  
  nomor_telepon: z.string().min(1, "Nomor telepon harus diisi").optional(),  
  email: z.string().email("Email tidak valid").min(1, "Email harus diisi").optional(),  
  status_keanggotaan: z.enum(["AKTIF", "NONAKTIF"], {  
    invalid_type_error: "Status keanggotaan harus AKTIF atau NONAKTIF",  
  }).optional(),  
  kartu_keluargaid: z.number().int().optional(),  
  rayonId: z.number().int().optional(),  
});  