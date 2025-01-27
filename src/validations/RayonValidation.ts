import {z} from "zod";


export const createRayonSchema = z.object({  
    nama_rayon: z.string().min(1, "Nama rayon harus diisi"),  
    wilayah: z.string().min(1, "Wilayah harus diisi")  
  }); 