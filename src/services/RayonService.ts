import { createRayon, findAllRayon } from "../repositories/RayonRepository";
import { createRayonSchema } from "../validations/RayonValidation"


export const addRayon = async (data: any) => {
    const validateData =  createRayonSchema.parse(data);
    return await createRayon(validateData);
}

export const findRayon = async () => {
    return await findAllRayon();
}

