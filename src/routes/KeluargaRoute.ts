import {Elysia} from "elysia";

import { addKartuKeluargaHandler, deleteKartuKeluargaHandler, findAllKartuKeluargaHandler, updateKartuKeluargaHandler } from "../controllers/KartuKeluargaController";

export const kartuKeluargaRoutes =(app:Elysia)=>{
    app.post('/api/kartu-keluarga', addKartuKeluargaHandler);
    app.get('/api/kartu-keluarga', findAllKartuKeluargaHandler);
    app.put('/api/kartu-keluarga/:id', updateKartuKeluargaHandler);
    app.delete('/api/kartu-keluarga/:id', deleteKartuKeluargaHandler);
    
};