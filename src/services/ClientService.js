import Client from "../models/Client.js";

class ClientService {
  async getAllClients() {
    return await Client.findAll({ include: 'person' });
  }

  async getClientById(id) {
    return await Client.findByPk(id, { include: 'person' });
  }

  async createClient(data) {
    const client = await Client.create(data);
    return client;
  }

  async updateClient(id, data) {
    const client = await Client.findByPk(id);
    if (!client) return null;
    await client.update(data);
    return client;
  }

  async deleteClient(id) {
    const client = await Client.findByPk(id);
    if (!client) return null;
    await client.destroy();
    return true;
  }
}

export default ClientService;
