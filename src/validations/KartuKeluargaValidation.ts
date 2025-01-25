import {z} from "zod";

export const createKartuKeluargaSchema = z.object({
  nama_kartu_keluarga: z.string(),
  alamat_keluarga: z.string(),
  nomor_kartu_keluarga: z.string().max(16),
  jemaat: z.number()

});