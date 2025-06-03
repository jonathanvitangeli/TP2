import { Router } from "express";
import BarberController from "../controllers/BarberController.js";

const router = Router();
const barberController = new BarberController();

router.get("/", barberController.getAllBarbersController);
router.get("/:id", barberController.getBarberByIdController);
router.post("/", barberController.createBarberController);
router.put("/:id", barberController.updateBarberController);
router.delete("/:id", barberController.deleteBarberController);

export default router;
