import {Elysia} from "elysia";

import { createRayonHandler, findAllRayonHandler } from "../controllers/RayonController";

export const rayonRoutes = (app: Elysia)=> {
    app.post("/api/rayon", createRayonHandler);
    app.get("/api/rayon", findAllRayonHandler);
};

