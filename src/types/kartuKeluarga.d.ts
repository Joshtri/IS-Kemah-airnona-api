import { Jemaat } from "./jemaat";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface KartuKeluarga {
    id: number;
    nama_kepala_keluarga: string;
    alamat_keluarga: string;
    nomor_telepon_keluarga: string;
    created_at: Date;
    updated_at: Date;

    // Relasi
    jemaat: Jemaat[];
}

// export interface Jemaat {
//     // Define the fields for Jemaat interface here
// }


export type KartuKeluargaCreateInput = Prisma.KartuKeluargaUncheckedCreateInput;
export type KartuKeluargaUpdateInput = Prisma.KartuKeluargaUncheckedUpdateInput;