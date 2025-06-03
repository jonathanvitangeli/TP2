import { Router } from "express";
import TurnController from "../controllers/TurnController.js";

const router = Router();
const turnController = new TurnController();

router.get("/", turnController.getAllTurnsController);
router.get("/:id", turnController.getTurnByIdController);
router.post("/", turnController.createTurnController);
router.put("/:id", turnController.updateTurnController);
router.delete("/:id", turnController.deleteTurnController);

export default router;
