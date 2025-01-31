import Elysia from "elysia";
import { jemaatRoutes } from "./routes/JemaatRoute.js";
import { kartuKeluargaRoutes } from "./routes/KeluargaRoute.js";
import { rayonRoutes } from "./routes/RayonRoute.js";
import cors from "@elysiajs/cors";

const app = new Elysia()
  .use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"]
  }))
  .use(jemaatRoutes) // Sekarang cukup pakai variabelnya langsung
  .use(kartuKeluargaRoutes)
  .use(rayonRoutes);

export default app;
