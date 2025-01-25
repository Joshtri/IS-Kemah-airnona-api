import { addJemaat, findJemaat } from "../services/JemaatService";

export const createJemaatHandler = async (req: Request, res: Response) => {
  try {
    const jemaat = await addJemaat(req.body);
    return jemaat;
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: "An unknown error occurred" };
  }
};


export const findAllJemaatHandler = async (req: Request, res:Response) => {
    try {
        const jemaat = await findJemaat();
        return jemaat;
    } catch (error) {
        if(error instanceof Error){
          return {error: error.message};
        }
          return {error: "An unknown error occurred"};
    }
};
