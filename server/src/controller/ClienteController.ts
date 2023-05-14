import { Request, Response } from "express";
import { ClienteService } from "../service/ClienteService";

export const ClienteController = {
  store: async (req: Request, res: Response) => {
    const { file } = req;
    const { separator } = req.query;

    const result = await ClienteService.add(file, separator as string)

    if(result.error) {
      return res.status(400).json(result);
    }

    return res.status(201).json(result);
  }
}
