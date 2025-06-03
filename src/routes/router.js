import express from "express";
import barberRoutes from "./barberRoutes.js";
import clientRoutes from "./ClientRoutes.js";
import serviceRoutes from "./serviceRoutes.js";
import turnRoutes from "./turnRoutes.js";


const router = express.Router();

router.use("/barbers", barberRoutes);
router.use("/clients", clientRoutes);
router.use("/services", serviceRoutes);
router.use("/turns", turnRoutes);

export default router;
