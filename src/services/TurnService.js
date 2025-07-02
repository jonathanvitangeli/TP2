import { Turn, User, Service } from "../models/index.js";

class TurnService {
  async getAllTurnsService() {
    return await Turn.findAll({
      include: [
        { model: User, as: "Client", attributes: ["id", "name", "mail"] },
        { model: User, as: "Barber", attributes: ["id", "name", "mail"] },
        { model: Service, attributes: ["id", "name"] },
      ],
    });
  }

  async getTurnById(id) {
    return await Turn.findByPk(id, {
      include: [
        { model: User, as: "Client", attributes: ["id", "name", "mail"] },
        { model: User, as: "Barber", attributes: ["id", "name", "mail"] },
        { model: Service, attributes: ["id", "name"] },
      ],
    });
  }

  async createTurnService(data) {
    const turn = await Turn.create(data);
    return turn;
  }

  async updateTurn(id, data) {
    const turn = await Turn.findByPk(id);
    if (!turn) return null;
    await turn.update(data);
    return turn;
  }

  async deleteTurn(id) {
    const turn = await Turn.findByPk(id);
    if (!turn) return null;
    await turn.destroy();
    return true;
  }
}

export default TurnService;
