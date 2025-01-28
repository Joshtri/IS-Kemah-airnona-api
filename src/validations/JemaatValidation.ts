import { z } from "zod";

export const createJemaatSchema = z.object({
  nama_jemaat: z.string().min(1, "Nama jemaat harus diisid"),  
  // tanggal_lahir: z.date(),
  tanggal_lahir: z.preprocess((arg)=>(typeof arg=== "string" ?  new Date(arg) : arg), z.date()),
  alamat: z.string().min(1, "Alamat harus diisi"),  
  nomor_telepon: z.string().min(1, "Nomor telepon harus diisi"),  
  email: z.string().email("Email tidak valid").min(1, "Email harus diisi"),  
  status_keanggotaan: z.enum(["aktif", "meninggal", "pindah"], {  
    invalid_type_error: "Status keanggotaan harus AKTIF atau NONAKTIF",  
  }),  
  kartu_keluargaid: z.number().int(),  
  rayonId: z.number().int(),  
});


// Contoh validasi
// const result = createJemaatSchema.safeParse({
//   id: 2,
//   nama_jemaat: "John Doe",
//   tanggal_lahir: "1990-01-01T00:00:00Z",
//   alamat: "Jl. Contoh No. 123",
//   nomor_telepon: "081234567890",
//   email: "johndoe@example.com",
//   status_keanggotaan: "aktif",
//   created_at: "2023-10-01T12:00:00Z",
//   updated_at: "2023-10-01T12:00:00Z",
//   kartu_keluargaid: 1,
//   rayonId: 1,
// });

// console.log(result);


export const updateJemaatSchema = z.object({  
  nama_jemaat: z.string().min(1, "Nama jemaat harus diisi").optional(),  
  tanggal_lahir: z.date().optional(),  
  alamat: z.string().min(1, "Alamat harus diisi").optional(),  
  nomor_telepon: z.string().min(1, "Nomor telepon harus diisi").optional(),  
  email: z.string().email("Email tidak valid").min(1, "Email harus diisi").optional(),  
  status_keanggotaan: z.enum(["aktif", "pindah", "meningggal"], {  
    invalid_type_error: "Status keanggotaan harus AKTIF, Meninggal, Pindah",  
  }).optional(),  
  kartu_keluargaid: z.number().int().optional(),  
  rayonId: z.number().int().optional(),  
});  