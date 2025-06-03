import ClientService from "../services/ClientService.js";

class ClientController {
  clientService = new ClientService();

  getAllClientsController = async (req, res) => {
    try {
      const clients = await this.clientService.getAllClientsService();
      res.status(200).send({
        success: true,
        message: clients,
      });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: error.message,
      });
    }
  };

  getClientByIdController = async (req, res) => {
    try {
      const id = req.params.id;
      const client = await this.clientService.getClientByIdService(id);
      if (!client) {
        return res.status(404).send({
          success: false,
          message: `Client with id ${id} not found.`,
        });
      }
      res.status(200).send({
        success: true,
        message: client,
      });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: error.message,
      });
    }
  };

  createClientController = async (req, res) => {
    try {
      const { name, lastName, dni, phone } = req.body;
      const newClient = await this.clientService.createClientService({
        name,
        lastName,
        dni,
        phone,
      });
      res.status(201).send({
        success: true,
        message: newClient,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  updateClientController = async (req, res) => {
    try {
      const id = req.params.id;
      const data = req.body;
      const updated = await this.clientService.updateClientService(id, data);
      res.status(200).send({
        success: true,
        message: updated,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  deleteClientController = async (req, res) => {
    try {
      const id = req.params.id;
      await this.clientService.deleteClientService(id);
      res.status(200).send({
        success: true,
        message: `Client with id ${id} deleted successfully.`,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };
}

export default ClientController;
