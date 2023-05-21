import { Router } from "express";
import multer from "multer";
import { ClienteController } from "./controller/ClienteController";

const multerConfig = multer();

const routes = Router();

routes.post('/clientes', multerConfig.single("file"), ClienteController.store);

routes.get('/connectdb', ClienteController.connectDatabase);
routes.get('/disconnectdb', ClienteController.disconnectDatabase);

export { routes }
