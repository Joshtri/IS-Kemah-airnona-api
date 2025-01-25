import {z} from "zod";


export const createRayonSchema = z.object({ 
    nama_rayon: z.string(),
    wilayah: z.string() 
});