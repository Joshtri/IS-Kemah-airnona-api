import { Jemaat } from "./jemaat";

export interface Rayon {
    id: number;
    nama_rayon: string;
    wilayah: string;
    jemaat: Jemaat[];
}

// export interface Jemaat {
//     // Define the properties of Jemaat interface here
// }




export type RayonCreateInput = Prisma.RayonUncheckedCreateInput;
export type RayonUpdateInput = Prisma.RayonUncheckedUpdateInput;