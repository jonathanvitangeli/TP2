import RoleService from "../services/RoleService.js";

class RoleController {
  roleService = new RoleService();

  getAllRolesController = async (req, res) => {
    try {
      const roles = await this.roleService.getAllRolesService();
      res.status(200).send({ success: true, message: roles });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getRoleByIdController = async (req, res) => {
    try {
      const { id } = req.params;
      const role = await this.roleService.getRoleByIdService(id);
      res.status(200).send({ success: true, message: role });
    } catch (error) {
      res.status(404).send({ success: false, message: error.message });
    }
  };

  createRoleController = async (req, res) => {
    try {
      const { name } = req.body;
      const newRole = await this.roleService.createRoleService({ name });
      res.status(201).send({ success: true, message: newRole });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  updateRoleController = async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const updated = await this.roleService.updateRoleService(id, { name });
      res.status(200).send({ success: true, message: updated });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  deleteRoleController = async (req, res) => {
    try {
      const { id } = req.params;
      await this.roleService.deleteRoleService(id);
      res.status(200).send({ success: true, message: "Role deleted successfully" });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default RoleController;
