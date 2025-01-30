// src/controllers/RayonController.ts  
  
import { addRayon, findRayon, updateRayon, deleteRayon, findRayonById } from "../services/RayonService";  
import type { Context } from "elysia";  
  
export const createRayonHandler = async (context: Context) => {  
    try {  
        const data = context.body;  
        const rayon = await addRayon(data);  
        return { 
            status: 201, 
            message: "Rayon created successfully", 
            data: rayon 
        };  
    } catch (error) {  
        if (error instanceof Error) {  
            return { status: 400, error: error.message };  
        }  
        return { status: 500, error: "An unknown error occurred" };  
    }  
};  

export const findAllRayonHandler = async () => {  
    try {  
        const rayon = await findRayon();  
        return { 
            status: 200, 
            message: "Rayon retrieved successfully", 
            data: rayon 
        };  
    } catch (error) {  
        if (error instanceof Error) {  
            return { status: 400, error: error.message };  
        }  
        return { status: 500, error: "An unknown error occurred" };  
    }  
};  
    
export const updateRayonHandler = async (context: Context) => {  
    try {  
        const { id } = context.params as { id: string };  
        const data = context.body;  
        const rayon = await updateRayon(Number(id), data);  
        return { 
            status: 200, 
            message: "Rayon updated successfully", 
            data: rayon 
        };  
    } catch (error) {  
        if (error instanceof Error) {  
            return { status: 400, error: error.message };  
        }  
        return { status: 500, error: "An unknown error occurred" };  
    }  
};  
    
export const deleteRayonHandler = async (context: Context) => {  
    try {  
        const { id } = context.params as { id: string };  
        await deleteRayon(Number(id));  
        return { 
            status: 200, 
            message: "Rayon deleted successfully" 
        };  
    } catch (error) {  
        if (error instanceof Error) {  
            return { status: 400, error: error.message };  
        }  
        return { status: 500, error: "An unknown error occurred" };  
    }  
};  


export const findRayonByIdHandler = async ({ params }: Context) => {
  const { id } = params as { id: string };
  try {
    const rayon = await findRayonById(Number(id));
    return {
      status: 200,
      message: "Rayon retrieved successfully",
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

