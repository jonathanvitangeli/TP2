import Barber from "../models/Barber.js";

class BarberService {
  async getAllBarbers() {
    return await Barber.findAll({ include: 'person' });
  }

  async getBarberById(id) {
    return await Barber.findByPk(id, { include: 'person' });
  }

  async createBarber(data) {
    const barber = await Barber.create(data);
    return barber;
  }

  async updateBarber(id, data) {
    const barber = await Barber.findByPk(id);
    if (!barber) return null;
    await barber.update(data);
    return barber;
  }

  async deleteBarber(id) {
    const barber = await Barber.findByPk(id);
    if (!barber) return null;
    await barber.destroy();
    return true;
  }
}

export default BarberService;
