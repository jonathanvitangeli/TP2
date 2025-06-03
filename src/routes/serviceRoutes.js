import { Router } from "express";
import ServiceController from '../controllers/ServiceController.js';

const router = Router();
const serviceController = new ServiceController();

router.get("/", serviceController.getAllServicesController);
router.get("/:id", serviceController.getServiceByIdController);
router.post("/", serviceController.createServiceController);
router.put("/:id", serviceController.updateServiceController);
router.delete("/:id", serviceController.deleteServiceController);

export default router;
