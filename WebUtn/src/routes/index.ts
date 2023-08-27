import { Router } from "express";
import producto  from "./cliente"

const routes = Router();

routes.use('/cliente', producto);

export default routes;