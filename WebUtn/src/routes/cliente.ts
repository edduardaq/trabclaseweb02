import { Router } from "express";
import ProdcutosControler from "../controller/clienteControler";
import clienteControler from "../controller/clienteControler";

const routes = Router();

routes.get('', clienteControler.getALL);
routes.post('', clienteControler.add);
routes.put('', clienteControler.update);
routes.delete('', clienteControler.detele);
export default routes;