import { Request, Response, Router } from "express";
import multer from "multer";
import { Readable } from "stream";
import readline from "readline";
import { Cliente } from "./entity/Cliente";
import { AppDataSource } from "./database/data-source";

const multerConfig = multer();

const routes = Router();

interface ICliente {
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
}

routes.post('/clientes', multerConfig.single("file"), async (req: Request, res: Response) => {
  const { buffer } = req.file;

  const readableFile = new Readable();
  readableFile.push(buffer);
  readableFile.push(null);

  const clientesLine = readline.createInterface({
    input: readableFile
  });

  const clienteList: ICliente[] = [];

  for await(let line of clientesLine) {
    const clientesLineSplitted = line.split(";");

    clienteList.push({
      nome: clientesLineSplitted[0],
      email: clientesLineSplitted[1],
      telefone: clientesLineSplitted[2],
      endereco: clientesLineSplitted[3],
    })
  }

  for await(let { nome, email, telefone, endereco } of clienteList) {
    const cliente = new Cliente();
    cliente.nome = nome;
    cliente.email = email;
    cliente.telefone = telefone;
    cliente.endereco = endereco;

    await AppDataSource.manager.save(cliente);
  }

  res.status(201).json(clienteList);
});

export { routes }
