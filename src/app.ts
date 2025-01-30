
import {Elysia} from "elysia";
import { jemaatRoutes } from "./routes/JemaatRoute.js";
import { kartuKeluargaRoutes } from "./routes/KeluargaRoute.js";
import { rayonRoutes } from "./routes/RayonRoute.js";
import { cors } from "@elysiajs/cors";
import checkConnection from "./config/dbConfig.js";


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
