import { Readable } from "stream";
import readline from "readline";
import { ICliente } from "../entity/interface/ICliente";
import ClienteRepository from "../repository/ClienteRepository";

export const ClienteService ={
  add: async (file: Express.Multer.File) => {
  const { buffer } = file;

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
    await ClienteRepository.insert({ nome, email, telefone, endereco });
  }
 }
}
