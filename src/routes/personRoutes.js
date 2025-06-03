import { Router } from "express";
import PersonController from "../controllers/PersonController.js";

const router = Router();
const personController = new PersonController();

router.get("/", personController.getAllPersonsController);
router.get("/:id", personController.getPersonByIdController);
router.post("/", personController.createPersonController);
router.put("/:id", personController.updatePersonController);
router.delete("/:id", personController.deletePersonController);

export default router;
