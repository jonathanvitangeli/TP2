import ServiceService from "../services/ServiceService.js";

class ServiceController {
  serviceService = new ServiceService();

  getAllServicesController = async (req, res) => {
    try {
      const services = await this.serviceService.getAllServicesService();
      res.status(200).send({ success: true, message: services });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getServiceByIdController = async (req, res) => {
    try {
      const { id } = req.params;
      const service = await this.serviceService.getServiceByIdService(id);
      res.status(200).send({ success: true, message: service });
    } catch (error) {
      res.status(404).send({ success: false, message: error.message });
    }
  };

  createServiceController = async (req, res) => {
    try {
      const { name, price } = req.body;
      const service = await this.serviceService.createServiceService({ name, price });
      res.status(201).send({ success: true, message: service });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  updateServiceController = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, price } = req.body;
      const updatedService = await this.serviceService.updateServiceService(id, { name, price });
      res.status(200).send({ success: true, message: updatedService });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  deleteServiceController = async (req, res) => {
    try {
      const { id } = req.params;
      await this.serviceService.deleteServiceService(id);
      res.status(200).send({ success: true, message: "Service deleted successfully" });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default ServiceController;