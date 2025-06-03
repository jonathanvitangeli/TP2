import BarberService from "../services/BarberService.js";

class BarberController {
  barberService = new BarberService();

  getAllBarbersController = async (req, res) => {
    try {
      const barbers = await this.barberService.getAllBarbersService();
      res.status(200).send({
        success: true,
        message: barbers,
      });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: error.message,
      });
    }
  };

  getBarberByIdController = async (req, res) => {
    try {
      const id = req.params.id;
      const barber = await this.barberService.getBarberByIdService(id);
      if (!barber) {
        return res.status(404).send({
          success: false,
          message: `Barber with id ${id} not found.`,
        });
      }
      res.status(200).send({
        success: true,
        message: barber,
      });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: error.message,
      });
    }
  };

  createBarberController = async (req, res) => {
    try {
      const { name, lastName, dni, phone, address } = req.body;
      const newBarber = await this.barberService.createBarberService({
        name,
        lastName,
        dni,
        phone,
        address,
      });
      res.status(201).send({
        success: true,
        message: newBarber,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  updateBarberController = async (req, res) => {
    try {
      const id = req.params.id;
      const data = req.body;
      const updated = await this.barberService.updateBarberService(id, data);
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

  deleteBarberController = async (req, res) => {
    try {
      const id = req.params.id;
      await this.barberService.deleteBarberService(id);
      res.status(200).send({
        success: true,
        message: `Barber with id ${id} deleted successfully.`,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };
}

export default BarberController;
