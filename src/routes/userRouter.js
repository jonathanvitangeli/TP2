import { Router } from "express";
import UserController from "../controllers/UserController.js";

const userController = new UserController();
const userRouter = Router();

userRouter.post("/", userController.createUserController);
userRouter.post("/login", userController.login);

userRouter.get("/me", userController.me);
userRouter.get("/", userController.getAllUserController);
userRouter.get("/:id", userController.getUserByIdController);
userRouter.put("/:id", userController.updateUserController);
userRouter.delete("/:id", userController.deleteUserController);

export default userRouter;
