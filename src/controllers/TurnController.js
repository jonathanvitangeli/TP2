import TurnService from "../services/TurnService.js";

class TurnController {
  turnService = new TurnService();

  getAllTurnsController = async (req, res) => {
    try {
      const turns = await this.turnService.getAllTurnsService();
      res.status(200).send({ success: true, message: turns });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getTurnByIdController = async (req, res) => {
    try {
      const { id } = req.params;
      const turn = await this.turnService.getTurnByIdService(id);
      res.status(200).send({ success: true, message: turn });
    } catch (error) {
      res.status(404).send({ success: false, message: error.message });
    }
  };

  createTurnController = async (req, res) => {
    try {
      const { date, idService, idBarber, idClient } = req.body;
      const turn = await this.turnService.createTurnService({ date, idService, idBarber, idClient });
      res.status(201).send({ success: true, message: turn });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  updateTurnController = async (req, res) => {
    try {
      const { id } = req.params;
      const { date, idService, idBarber, idClient } = req.body;
      const updatedTurn = await this.turnService.updateTurnService(id, { date, idService, idBarber, idClient });
      res.status(200).send({ success: true, message: updatedTurn });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  deleteTurnController = async (req, res) => {
    try {
      const { id } = req.params;
      await this.turnService.deleteTurnService(id);
      res.status(200).send({ success: true, message: "Turn deleted successfully" });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default TurnController;