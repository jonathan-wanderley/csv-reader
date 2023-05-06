import { Request, Response } from "express";
import { ClienteService } from "../service/ClienteService";

export const ClienteController = {
  store: async (req: Request, res: Response) => {
    const { file } = req;

    const clienteList = await ClienteService.add(file)

    res.status(201).json(clienteList);
  }
}
