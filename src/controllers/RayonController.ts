import { addRayon, findRayon } from "../services/RayonService";


export const createRayonHandler = async (req: Request, res: Response) => {
    try {
        const rayon = await addRayon(req.body);
        return rayon;
    } catch (error) {
        if (error instanceof Error) {
            return { error: error.message };
        }
        return { error: "An unknown error occurred" };
    }
}

export const findAllRayonHandler = async (req: Request, res: Response) => {
    try {
        const rayon = await findRayon();
        return rayon;
    } catch (error) {
        if (error instanceof Error) {
            return { error: error.message };
        }
        return { error: "An unknown error occurred" };
    }
}