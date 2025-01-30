import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import { jemaatRoutes } from "./routes/JemaatRoute.js";
import { kartuKeluargaRoutes } from "./routes/KeluargaRoute.js";
import { rayonRoutes } from "./routes/RayonRoute.js";
import checkConnection from "./config/dbConfig.js";

// Initialize the database
console.log("🚀 Initializing Database...");
checkConnection();
console.log("✅ Done!");

const app = new Elysia();

// Enable CORS for all routes
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"]
}));

// Setup Swagger for API documentation
app.use(swagger({
  documentation: {
    info: {
      title: "Jemaat API",
      version: "1.0.0",
      description: "API for managing Jemaat, Kartu Keluarga, and Rayon. Developed with Elysia.js framework."
    },
    components: {
      securitySchemes: {
        JwtAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    },
    servers: [{ url: "http://localhost:5000" }]
  },
  swaggerOptions: {
    persistAuthorization: true
  }
}));

// Register routes
jemaatRoutes(app);
kartuKeluargaRoutes(app);
rayonRoutes(app);

// Export the fetch function for web standard environments
export default app.fetch;

// Log the server running message
console.log(`🦊 Elysia is running on port  5000}`);