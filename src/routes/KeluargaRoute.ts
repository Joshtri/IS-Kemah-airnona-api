import {Elysia} from "elysia";

import { createKartuKeluargaHandler, findallKartuKeluargaHandler } from "../controllers/KartuKeluargaController";

export const kartuKeluargaRoutes =(app:Elysia)=>{
    app.post('/api/kartu-keluarga', createKartuKeluargaHandler)
    app.get('/api/kartu-keluarga', findallKartuKeluargaHandler)
    
};