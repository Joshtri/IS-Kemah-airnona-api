import { createKartuKeluargaRepo, deleteKartuKeluargaRepo, findKartuKeluargaByIdRepo, updateKartuKeluargaRepo } from "../repositories/KartuKeluargaRepository.js";
import { findAllKartuKeluargaRepo } from "../repositories/KartuKeluargaRepository.js";
import type { KartuKeluarga, KartuKeluargaCreateInput, KartuKeluargaUpdateInput } from "../types/kartuKeluarga.js";
import { createKartuKeluargaSchema } from "../validations/KartuKeluargaValidation.js";


export const addKartuKeluarga = async(data:KartuKeluargaCreateInput)=>{
    const validateData = createKartuKeluargaSchema.parse(data);
    return await createKartuKeluargaRepo(validateData);
};

export const  findKartuKeluarga = async() : Promise<KartuKeluarga[]>=>{
    return await findAllKartuKeluargaRepo();
}

export const findKartuKeluargaById = async (id: number) => {
    return await findKartuKeluargaByIdRepo(id);
}

export const updateKartuKeluarga = async (id: number, data: KartuKeluargaUpdateInput): Promise<any> => {
    return await updateKartuKeluargaRepo(id,data);
}

export const deleteKartuKeluarga = async (id: number): Promise<any> => {
    return await deleteKartuKeluargaRepo(id);
}