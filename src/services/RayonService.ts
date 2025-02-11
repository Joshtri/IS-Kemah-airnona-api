import { createRayonRepo, deleteRayonRepo, findAllRayonRepo, findRayonByIdRepo, updateRayonRepo } from "../repositories/RayonRepository.js";
import type { Rayon, RayonCreateInput, RayonUpdateInput } from "../types/rayon.js";
import { createRayonSchema } from "../validations/RayonValidation.js"


export const addRayon = async (data: RayonCreateInput) => {
    const validateData =  createRayonSchema.parse(data);
    return await createRayonRepo(validateData);
}

export const findRayon = async () : Promise<Rayon[]> => {
    return await findAllRayonRepo();
}


export const findRayonById = async (id: number) => {
    return await findRayonByIdRepo(id);
}

export const updateRayon = async (id: number, data: RayonUpdateInput): Promise<any> => {
    return await updateRayonRepo(id, data);
}

export const deleteRayon = async (id: number): Promise<any> => {
    return await deleteRayonRepo(id);
}
