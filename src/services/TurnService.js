import Turn from "../models/Turn.js";
import Service from "../models/Service.js";

class TurnService {
  async getAllTurns() {
    return await Turn.findAll({
      include: [Client, Barber, Service],
    });
  }

  async getTurnById(id) {
    return await Turn.findByPk(id, {
      include: [Client, Barber, Service],
    });
  }

  async createTurn(data) {
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
  async createTurnService(data) {
    const turn = await Turn.create(data);
    return turn;
  }
}

export default TurnService;
