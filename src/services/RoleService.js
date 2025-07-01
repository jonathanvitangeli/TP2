import Role from "../models/Role.js";

class RoleService {
  async getAllRolesService() {
    return await Role.findAll();
  }

  async getRoleByIdService(id) {
    return await Role.findByPk(id);
  }

  async createRoleService(data) {
    const role = await Role.create(data);
    return role;
  }

  async updateRoleService(id, data) {
    const role = await Role.findByPk(id);
    if (!role) return null;
    await role.update(data);
    return role;
  }

  async deleteRoleService(id) {
    const role = await Role.findByPk(id);
    if (!role) return null;
    await role.destroy();
    return true;
  }
  getRoleByIdService = async (id) => {
  const role = await Role.findByPk(id);
  return role;
};

}

export default RoleService;
