
import {Elysia} from "elysia";
import { jemaatRoutes } from "./routes/JemaatRoute";
import { kartuKeluargaRoutes } from "./routes/KeluargaRoute";
import { rayonRoutes } from "./routes/RayonRoute";
import cors from "@elysiajs/cors";


const app = new Elysia();

// Enable CORS for all routes
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"]
}));

jemaatRoutes(app);
kartuKeluargaRoutes(app);
rayonRoutes(app);


export default app;
