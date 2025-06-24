import {Router} from "express";
import rolesRouter from "./rolesRouter.js";
import userRouter from "./userRouter.js";
import serviceRoutes from "./serviceRoutes.js";
import turnRoutes from "./turnRoutes.js";


const router = express.Router();

router.use("/roles", rolesRouter);
router.use("/users", userRouter);
router.use("/services", serviceRoutes);
router.use("/turns", turnRoutes);

export default router;











