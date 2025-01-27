// src/controllers/jemaatController.ts  
  
import { addJemaat, findJemaat, updateJemaat, deleteJemaat } from "../services/JemaatService";  
import type { Context } from "elysia";  
  
export const createJemaatHandler = async ({ body }: Context) => {  
  try {  
    const jemaat = await addJemaat(body);  
    return { 
      status:201,
      message: "Jemaat created successfully", 
      data: jemaat 
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
  
export const findAllJemaatHandler = async () => {  
  try {  
    const jemaat = await findJemaat();  
    return { 
      status: 200,
      message: "Jemaat retrieved successfully", 
      data: jemaat 
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
  
export const updateJemaatHandler = async ({ params, body }: Context) => {  
  const { id } = params as { id: string };  
  try {  
    const jemaat = await updateJemaat(Number(id), body);  
    return { 
      status: 200,
      message: "Jemaat updated successfully", 
      data: jemaat 
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
  
export const deleteJemaatHandler = async ({ params }: Context) => {  
  const { id } = params as { id: string };  
  try {  
    const jemaat = await deleteJemaat(Number(id));  
    return { 
      status: 200,
      message: "Jemaat deleted successfully", 
      data: jemaat 
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
