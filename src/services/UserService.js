import { User, Role } from "../models/index.js";
import { gentoken } from "../utils/token.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

class UserService {
  // Traer todos los usuarios con su rol
  getAllUserService = async () => {
    const users = await User.findAll({
      attributes: ["id", "name", "mail", "RoleId"],
      include: {
        model: Role,
        attributes: ["name"], // o "roleName" si así está en tu modelo
      },
    });
    return users;
  };

  // Traer un usuario por ID
  getlUserServiceById = async (id) => {
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

  // Crear nuevo usuario
  createUserService = async (data) => {
    // Hash del password antes de guardar
    const hashedPassword = await bcrypt.hash(data.pass, 10);
    const user = await User.create({ ...data, pass: hashedPassword });
    return user;
  };

  // Login
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

  // Info del usuario actual (por token)
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
}

export default UserService;
