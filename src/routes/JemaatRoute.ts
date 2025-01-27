import {Elysia} from "elysia";
import { createJemaatHandler, deleteJemaatHandler, findAllJemaatHandler, updateJemaatHandler } from "../controllers/JemaatController";

export const jemaatRoutes = (app: Elysia)=> {
    app.post("/api/jemaat", createJemaatHandler);
    app.get("/api/jemaat", findAllJemaatHandler);
    app.put("/api/jemaat/:id", updateJemaatHandler);
    app.delete("/api/jemaat/:id", deleteJemaatHandler);
};

