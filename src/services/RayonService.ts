import { createRayonRepo, deleteRayonRepo, findAllRayonRepo, updateRayonRepo } from "../repositories/RayonRepository";
import type { Rayon, RayonCreateInput, RayonUpdateInput } from "../types/rayon";
import { createRayonSchema } from "../validations/RayonValidation"


export const addRayon = async (data: RayonCreateInput) => {
    const validateData =  createRayonSchema.parse(data);
    return await createRayonRepo(validateData);
}

export const findRayon = async () : Promise<Rayon[]> => {
    return await findAllRayonRepo();
}


export const updateRayon = async (id: number, data: RayonUpdateInput): Promise<any> => {
    return await updateRayonRepo(id, data);
}

export const deleteRayon = async (id: number): Promise<any> => {
    return await deleteRayonRepo(id);
}