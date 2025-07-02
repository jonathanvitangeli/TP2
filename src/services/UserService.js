import { User, Role } from "../models/index.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { gentoken } from "../utils/token.js"; 

class UserService {
  getAllUserService = async () => {
    const users = await User.findAll({
      attributes: ["id", "name", "mail", "RoleId"],
      include: {
        model: Role,
        attributes: ["name"],   },
    });
    return users;
  };

  getUserServiceById = async (id) => {
    const user = await User.findByPk(id, {
      attributes: ["id", "name", "mail", "RoleId"],
      include: {
        model: Role,
        attributes: ["roleName"],
      },
    });
    if (!user) throw new Error("Usuario no encontrado");
    return user;
  };

 createUserService = async (data) => {
  const user = await User.create(data); 
  return user;
};


  login = async ({ mail, pass }) => {
    const user = await User.findOne({ where: { mail } });
    if (!user) throw new Error("Usuario no encontrado");

    const isMatch = await bcrypt.compare(pass, user.pass);
if (user.pass !== pass) throw new Error("Credenciales inválidas");

    const payload = {
      id: user.id,
      mail: user.mail,
      role: user.RoleId,
    };

    const token = gentoken(payload);
    return token;
  };

  me = async (token) => {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(decoded.id, {
      attributes: ["id", "name", "mail"],
      include: {
        model: Role,
        attributes: ["roleName"],
      },
    });
    return user;
  };

  updateUser = async (id, data) => {
    const user = await User.findByPk(id);
    if (!user) return null;

    if (data.pass) {
      data.pass = await bcrypt.hash(data.pass, 10);
    }

    await user.update(data);
    return user;
  };

  deleteUser = async (id) => {
    const user = await User.findByPk(id);
    if (!user) return null;

    await user.destroy();
    return true;
  };
}

export default UserService;
