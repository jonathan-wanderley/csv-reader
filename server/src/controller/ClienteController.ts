import { Request, Response } from "express";
import { ClienteService } from "../service/ClienteService";
import { AppDataSource } from "../database/data-source";

export const ClienteController = {
  store: async (req: Request, res: Response) => {
    const { file } = req;
    const { separator } = req.query;

    const result = await ClienteService.add(file, separator as string)

    if(result.error) {
      return res.status(400).json(result);
    }

    return res.status(201).json(result);
  },
  connectDatabase: async (req: Request, res: Response) => {
    AppDataSource.initialize()
      .then(async () => {
        // AppDataSource.destroy();
        return res.json({
          error: false,
          initialized: true,
          msg: "connected with sucess",
        })
      })
      .catch(error => {
        console.log(error);
        return res.json({
          error: true,
          initialized: false,
          msg: "connection failed, check your credentials",
        })
      });
  },
  disconnectDatabase: async (req: Request, res: Response) => {
    await AppDataSource.destroy();
    return res.status(200).send("");
  }
}
