
import {Elysia} from "elysia";
import { jemaatRoutes } from "./routes/JemaatRoute";
import { kartuKeluargaRoutes } from "./routes/KeluargaRoute";
import { rayonRoutes } from "./routes/RayonRoute";
import cors from "@elysiajs/cors";
import checkConnection from "./config/dbConfig";


const app = new Elysia();

checkConnection();

// Enable CORS for all routes
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"]
}));

jemaatRoutes(app);
kartuKeluargaRoutes(app);
rayonRoutes(app);


export default app;
