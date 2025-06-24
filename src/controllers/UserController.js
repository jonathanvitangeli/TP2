import UserService from "../services/UserService.js";

class UserController {
  userService = new UserService();

  getAllUserController = async (req, res) => {
    try {
      const users = await this.userService.getAllUserService();
      res.status(200).send({
        success: true,
        message: users,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  getUserByIdController = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await this.userService.getUserServiceById(id);

      if (!user) {
        return res.status(404).send({
          success: false,
          message: "Usuario no encontrado",
        });
      }

      res.status(200).send({
        success: true,
        message: user,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  createUserController = async (req, res) => {
    try {
      const { name, mail, pass, roleId } = req.body;

      const user = await this.userService.createUserService({
        name,
        mail,
        pass,
        roleId, // si tu tabla user tiene FK a role
      });

      res.status(201).send({
        success: true,
        message: user,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  login = async (req, res) => {
    try {
      const { mail, pass } = req.body;
      const token = await this.userService.login({ mail, pass });

      res.cookie("token", token, { httpOnly: true });
      res.status(200).send({
        success: true,
        message: "Usuario logueado",
      });
    } catch (error) {
      res.status(401).send({
        success: false,
        message: error.message,
      });
    }
  };

  me = async (req, res) => {
    try {
      const { token } = req.cookies;
      const user = await this.userService.me(token);

      res.status(200).send({
        success: true,
        message: user,
      });
    } catch (error) {
      res.status(401).send({
        success: false,
        message: error.message,
      });
    }
  };
}

export default UserController;
