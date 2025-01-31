import { Elysia } from "elysia";
import { 
  createJemaatHandler, 
  deleteJemaatHandler, 
  findAllJemaatHandler, 
  findJemaatByIdHandler, 
  updateJemaatHandler 
} from "../controllers/JemaatController.js";

export const jemaatRoutes = new Elysia()
  .post("/api/jemaat", createJemaatHandler)
  .get("/api/jemaat", findAllJemaatHandler)
  .get("/api/jemaat/:id", findJemaatByIdHandler)
  .patch("/api/jemaat/:id", updateJemaatHandler)
  .delete("/api/jemaat/:id", deleteJemaatHandler);
