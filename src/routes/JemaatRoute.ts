import {Elysia} from "elysia";
import { createJemaatHandler, deleteJemaatHandler, findAllJemaatHandler, findJemaatByIdHandler, updateJemaatHandler } from "../controllers/JemaatController.js";

export const jemaatRoutes = (app: Elysia)=> {
    app.post("/api/jemaat", createJemaatHandler);
    app.get("/api/jemaat", findAllJemaatHandler);
    app.get("/api/jemaat/:id", findJemaatByIdHandler);
    app.patch("/api/jemaat/:id", updateJemaatHandler);
    app.delete("/api/jemaat/:id", deleteJemaatHandler);
};

