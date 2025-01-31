import {Elysia} from "elysia";

import { addKartuKeluargaHandler, deleteKartuKeluargaHandler, findAllKartuKeluargaHandler, findKartuKeluargaByIdHandler, updateKartuKeluargaHandler } from "../controllers/KartuKeluargaController.js";

export const kartuKeluargaRoutes = new Elysia()
    .post('/api/kartu-keluarga', addKartuKeluargaHandler)
    .get('/api/kartu-keluarga', findAllKartuKeluargaHandler)
    .get('/api/kartu-keluarga/:id', findKartuKeluargaByIdHandler)
    .patch('/api/kartu-keluarga/:id', updateKartuKeluargaHandler)
    .delete('/api/kartu-keluarga/:id', deleteKartuKeluargaHandler)
    
