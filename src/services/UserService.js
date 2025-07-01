import { User, Role } from "../models/index.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { gentoken } from "../utils/token.js"; // Asegurate de que este archivo exista

class UserService {
  // Obtener todos los usuarios
  getAllUserService = async () => {
    const users = await User.findAll({
      attributes: ["id", "name", "mail", "RoleId"],
      include: {
        model: Role,
        attributes: ["name"],
      },
    });
    return users;
  };

  // Obtener usuario por ID
  getUserServiceById = async (id) => {
    const user = await User.findByPk(id, {
      attributes: ["id", "name", "mail", "RoleId"],
      include: {
        model: Role,
        attributes: ["name"],
      },
    });
    if (!user) throw new Error("Usuario no encontrado");
    return user;
  };

  // Crear nuevo usuario con hash
  createUserService = async (data) => {
    const hashedPassword = await bcrypt.hash(data.pass, 10);
    const user = await User.create({ ...data, pass: hashedPassword });
    return user;
  };

  // Login de usuario
  login = async ({ mail, pass }) => {
    const user = await User.findOne({ where: { mail } });
    if (!user) throw new Error("Usuario no encontrado");

    const isMatch = await bcrypt.compare(pass, user.pass);
    if (!isMatch) throw new Error("Credenciales inválidas");

    const payload = {
      id: user.id,
      mail: user.mail,
      role: user.RoleId,
    };

    const token = gentoken(payload);
    return token;
  };

  // Obtener datos del usuario desde token
  me = async (token) => {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(decoded.id, {
      attributes: ["id", "name", "mail"],
      include: {
        model: Role,
        attributes: ["name"],
      },
    });
    return user;
  };

  // Actualizar usuario por ID
  updateUser = async (id, data) => {
    const user = await User.findByPk(id);
    if (!user) return null;

    // Si se actualiza la contraseña, se hashea
    if (data.pass) {
      data.pass = await bcrypt.hash(data.pass, 10);
    }

    await user.update(data);
    return user;
  };

  // Eliminar usuario por ID
  deleteUser = async (id) => {
    const user = await User.findByPk(id);
    if (!user) return null;

    await user.destroy();
    return true;
  };
}

export default UserService;
