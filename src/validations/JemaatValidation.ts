import { z } from "zod";

export const createJemaatSchema = z.object({
  nama_jemaat: z.string(),
  tanggal_lahir: z.date(),
  alamat: z.string(),
  nomor_telepon: z.string().max(20),
  email: z.string().email(),
  status_keanggotaan: z.enum(["pindah", "meninggal", "aktif"]),
});

