// src/controllers/kartuKeluargaController.ts  
  
import { addKartuKeluarga, findKartuKeluarga, updateKartuKeluarga, deleteKartuKeluarga, findKartuKeluargaById } from "../services/KartuKeluargaService";  
import type { Context } from "elysia";  
  
export const addKartuKeluargaHandler = async ({ body, set }: Context) => {  
  try {  
    const kartuKeluarga = await addKartuKeluarga(body);  
    set.status = 201;  
    return kartuKeluarga;  
  } catch (error) {  
    if (error instanceof Error) {  
      set.status = 400;  
      return { error: error.message };  
    }  
    set.status = 500;  
    return { error: "An unknown error occurred" };  
  }  
};  
  
export const findAllKartuKeluargaHandler = async ({ set }: Context) => {  
  try {  
    const kartuKeluarga = await findKartuKeluarga();  
    // set.status = 200;  
    // return kartuKeluarga;  

    return{
      status: 200,
      message: "kartuKeluarga retrieved successfully", 
      data: kartuKeluarga 
    }
  } catch (error) {  
    if (error instanceof Error) {  
      return { 
        status: 500,
        error: error.message 
      };  
    }  
    return { 
      status: 500,
      error: "An unknown error occurred" 
    }; 
  }  
};  
  
export const updateKartuKeluargaHandler = async ({ params, body, set }: Context) => {  
  const { id } = params as { id: string };  
  try {  
    const kartuKeluarga = await updateKartuKeluarga(Number(id), body);  
    return { 
      status: 200,
      message: "Jemaat updated successfully", 
      data: kartuKeluarga 
    };  
  } catch (error) {  
    if (error instanceof Error) {  
      return { 
        status: 500,
        error: error.message 
      };  
    }  
    return { 
      status: 500,
      error: "An unknown error occurred" 
    };  
  }  
};  
  
export const deleteKartuKeluargaHandler = async ({ params, set }: Context) => {  
  const { id } = params as { id: string };  
  try {  
    const kartuKeluarga = await deleteKartuKeluarga(Number(id));  
    set.status = 200;  
    return kartuKeluarga;  
  } catch (error) {  
    if (error instanceof Error) {  
      set.status = 400;  
      return { error: error.message };  
    }  
    set.status = 500;  
    return { error: "An unknown error occurred" };  
  }  
};  


export const findKartuKeluargaByIdHandler = async ({ params }: Context) => {
  const { id } = params as { id: string };
  try {
    const rayon = await findKartuKeluargaById(Number(id));
    return {
      status: 200,
      message: "Kartu Keluarga retrieved successfully",
      data: rayon
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        status: 500,
        error: error.message
      };
    }
    return {
      status: 500,
      error: "An unknown error occurred"
    };
  }
}

