// src/types/jemaat.ts  
  
import { PrismaClient } from "@prisma/client";  
  
const prisma = new PrismaClient();  
  
export interface Jemaat {  
  id: number;  
  nama_jemaat: string;  
  tanggal_lahir: Date;  
  alamat: string;  
  nomor_telepon: string;  
  email: string;  
  status_keanggotaan: Prisma.StatusKeanggotaan;  
  created_at: Date;  
  updated_at: Date;  
  kartu_keluargaid: number;  
  rayonId: number;  
};  
  
export type JemaatCreateInput = Prisma.JemaatUncheckedCreateInput;  
  
export type JemaatUpdateInput = Prisma.JemaatUncheckedUpdateInput;  
