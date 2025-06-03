import { Router } from "express";
import ClientController from "../controllers/ClientController.js";

const router = Router();
const clientController = new ClientController();

router.get("/", clientController.getAllClientsController);
router.get("/:id", clientController.getClientByIdController);
router.post("/", clientController.createClientController);
router.put("/:id", clientController.updateClientController);
router.delete("/:id", clientController.deleteClientController);

export default router;
