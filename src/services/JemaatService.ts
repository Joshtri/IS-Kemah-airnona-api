import { createJemaatSchema } from "../validations/JemaatValidation";
import { createJemaatRepo, findAllJemaatRepo, deleteJemaatRepo, updateJemaatRepo } from "../repositories/JemaatRepository";
import type { Jemaat, JemaatCreateInput, JemaatUpdateInput } from "../types/jemaat";  

export const addJemaat = async (data: JemaatCreateInput) => {
  const validatedData = createJemaatSchema.parse(data);
  return await createJemaatRepo(validatedData);
};


export const findJemaat = async() : Promise<Jemaat[]> =>{
    return await findAllJemaatRepo();
}

export const updateJemaat = async (id: number, data: JemaatUpdateInput): Promise<Jemaat> => {
  // const validatedData = createJemaatSchema.parse(data);
  return await updateJemaatRepo(id, data);
}

export const deleteJemaat = async (id: number): Promise<Jemaat> => {
  return await deleteJemaatRepo(id);
};