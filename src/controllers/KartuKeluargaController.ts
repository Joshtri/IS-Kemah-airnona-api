// import { Request, Response } from "express";
import { addKartuKeluarga, findKartuKeluarga } from "../services/KartuKeluargaService";


export const createKartuKeluargaHandler = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const kartuKeluarga = await addKartuKeluarga(data);
        return kartuKeluarga;
        // return res.status(200).json(result);
    } catch (error) {
        return { error: (error as any).message };
    }
}

export const findallKartuKeluargaHandler = async (req: Request, res: Response) => {
    try {
        const kartuKeluarga = await findKartuKeluarga();
        return kartuKeluarga;
    } catch (error) {
        if(error instanceof Error){
            return {error: error.message};
        }
      return {error: "An unknown error occurred"};
    }
}