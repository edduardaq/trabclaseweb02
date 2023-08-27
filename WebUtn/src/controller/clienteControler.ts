import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { cliente } from "../entity/cliente";

class clienteControler {

    static getALL = async (req: Request, resp: Response) => {
        const repo=AppDataSource.getRepository(cliente)
        const listaProductos = await repo listaProductos 


        return resp.status(200).json({ mensaje: "OK" })
    }


    static getById = async (req: Request, resp: Response) => {

    }
    static add = async (req: Request, resp: Response) => {

    }
    static update = async (req: Request, resp: Response) => {

    }
    static detele = async (req: Request, resp: Response) => {

    }




}

export default clienteControler;