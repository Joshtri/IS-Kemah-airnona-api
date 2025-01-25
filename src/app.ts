
import {Elysia} from "elysia";
import { jemaatRoutes } from "./routes/JemaatRoute";
import { kartuKeluargaRoutes } from "./routes/KeluargaRoute";
import { rayonRoutes } from "./routes/RayonRoute";

const app = new Elysia();

jemaatRoutes(app);
kartuKeluargaRoutes(app);
rayonRoutes(app);


export default app;
