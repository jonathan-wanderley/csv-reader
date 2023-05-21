import { AppDataSource } from "../database/data-source";
import { ICliente } from "../entity/interface/ICliente";
import { Cliente } from "../entity/Cliente";

const ClienteRepository = {
  insert: async (clienteData: ICliente) => {
    const { nome, email, telefone, endereco } = clienteData;

    const cliente = new Cliente();
    cliente.nome = nome;
    cliente.email = email;
    cliente.telefone = telefone;
    cliente.endereco = endereco;

    await AppDataSource.manager.save(cliente);
  },
  isDatabaseConnected: () => {
    return AppDataSource.isInitialized;
  }
}

export default ClienteRepository;
