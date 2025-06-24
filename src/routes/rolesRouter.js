import { Router } from "express";
import RoleController from "../controllers/RoleController.js";

const rolesRouter = Router();
const roleController = new RoleController();

rolesRouter.get("/", roleController.getAllRoles);

export default rolesRouter;
