import {Elysia} from "elysia";
import { createJemaatHandler, findAllJemaatHandler } from "../controllers/JemaatController";

export const jemaatRoutes = (app: Elysia)=> {
    app.post("/api/jemaat", createJemaatHandler);
    app.get("/api/jemaat", findAllJemaatHandler);
};

