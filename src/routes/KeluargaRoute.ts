import {Elysia} from "elysia";

import { addKartuKeluargaHandler, deleteKartuKeluargaHandler, findAllKartuKeluargaHandler, findKartuKeluargaByIdHandler, updateKartuKeluargaHandler } from "../controllers/KartuKeluargaController";

export const kartuKeluargaRoutes =(app:Elysia)=>{
    app.post('/api/kartu-keluarga', addKartuKeluargaHandler);
    app.get('/api/kartu-keluarga', findAllKartuKeluargaHandler);
    app.get('/api/kartu-keluarga/:id', findKartuKeluargaByIdHandler);
    app.patch('/api/kartu-keluarga/:id', updateKartuKeluargaHandler);
    app.delete('/api/kartu-keluarga/:id', deleteKartuKeluargaHandler);
    
};