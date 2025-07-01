import { Router } from "express";
import RoleController from "../controllers/RoleController.js";

const rolesRouter = Router();
const roleController = new RoleController();

rolesRouter.get("/", roleController.getAllRolesController);
rolesRouter.get("/:id", roleController.getRoleByIdController);
rolesRouter.post("/", roleController.createRoleController);
rolesRouter.put("/:id", roleController.updateRoleController);
rolesRouter.delete("/:id", roleController.deleteRoleController);

export default rolesRouter;
