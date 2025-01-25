import { createKartuKeluarga } from "../repositories/KartuKeluargaRepository";
import { findAllKartuKeluarga } from "../repositories/KartuKeluargaRepository";
import { createKartuKeluargaSchema } from "../validations/KartuKeluargaValidation";


export const addKartuKeluarga = async(data:any)=>{
    const validateData = createKartuKeluargaSchema.parse(data);
    return await createKartuKeluarga(validateData);
};

export const  findKartuKeluarga = async()=>{
    return await findAllKartuKeluarga();
}

