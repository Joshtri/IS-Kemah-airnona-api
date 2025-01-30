import { createJemaatSchema } from "../validations/JemaatValidation";
import { createJemaatRepo, findAllJemaatRepo, deleteJemaatRepo, updateJemaatRepo, findJemaatByIdRepo } from "../repositories/JemaatRepository";
import type { Jemaat, JemaatCreateInput, JemaatUpdateInput } from "../types/jemaat";  
import { ZodError } from "zod";

export const addJemaat = async (data: JemaatCreateInput) => {
  try {
    // Validasi input dengan Zod
    const validatedData = createJemaatSchema.parse(data);

    // Jika validasi berhasil, data dikirim ke repository untuk disimpan
    return await createJemaatRepo(validatedData);
  } catch (error) {
    if (error instanceof ZodError) {
      // Ubah error validasi menjadi lebih terstruktur untuk controller
      const validationErrors = error.errors.reduce((acc, curr) => {
        acc[curr.path[0] as string] = curr.message; // Map field dengan pesan error
        return acc;
      }, {} as Record<string, string>);

      throw {
        status: 400, // HTTP status untuk validasi gagal
        message: "Validation failed",
        errors: validationErrors, // Struktur error untuk frontend
      };
    }

    // Lempar error lain (non-validasi)
    throw error;
  }
};


export const findJemaat = async() : Promise<Jemaat[]> =>{
    return await findAllJemaatRepo();
}

export const findJemaatById = async (id: number): Promise<Jemaat | null> => {
  return await findJemaatByIdRepo(id);
};

export const updateJemaat = async (id: number, data: JemaatUpdateInput): Promise<any> => {
  // const validatedData = createJemaatSchema.parse(data);
  return await updateJemaatRepo(id, data);
}

export const deleteJemaat = async (id: number): Promise<Jemaat> => {
  return await deleteJemaatRepo(id);
};