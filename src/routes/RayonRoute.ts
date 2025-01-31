import {Elysia} from "elysia";

import { createRayonHandler, deleteRayonHandler, findAllRayonHandler, findRayonByIdHandler, updateRayonHandler } from "../controllers/RayonController.js";

export const rayonRoutes = new Elysia()
    .post("/api/rayon", createRayonHandler)
    .get("/api/rayon", findAllRayonHandler)
    .get("/api/rayon/:id", findRayonByIdHandler)
    .delete("/api/rayon/:id", deleteRayonHandler)
    .patch("/api/rayon/:id", updateRayonHandler)

