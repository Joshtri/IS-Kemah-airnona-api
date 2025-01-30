import {Elysia} from "elysia";

import { createRayonHandler, deleteRayonHandler, findAllRayonHandler, findRayonByIdHandler, updateRayonHandler } from "../controllers/RayonController";

export const rayonRoutes = (app: Elysia)=> {
    app.post("/api/rayon", createRayonHandler);
    app.get("/api/rayon", findAllRayonHandler);
    app.get("/api/rayon/:id", findRayonByIdHandler);
    app.delete("/api/rayon/:id", deleteRayonHandler)
    app.patch("/api/rayon/:id", updateRayonHandler);
};

