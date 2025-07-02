import Service from "../models/Service.js";

class ServiceService {
 async getAllServicesService() {
    const services = await Service.findAll();
    return services;
  }

  async getServiceById(id) {
    return await Service.findByPk(id);
  }

  async createService(data) {
    const service = await Service.create(data);
    return service;
  }

  async updateService(id, data) {
    const service = await Service.findByPk(id);
    if (!service) return null;
    await service.update(data);
    return service;
  }

  async deleteService(id) {
    const service = await Service.findByPk(id);
    if (!service) return null;
    await service.destroy();
    return true;
  }
}

export default ServiceService;
