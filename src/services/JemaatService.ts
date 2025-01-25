import { createJemaatSchema } from "../validations/JemaatValidation";
import { createJemaat, findAllJemaat } from "../repositories/JemaatRepository";

export const addJemaat = async (data: any) => {
  const validatedData = createJemaatSchema.parse(data);
  return await createJemaat(validatedData);
};


export const findJemaat = async()=>{
    return await findAllJemaat();
}