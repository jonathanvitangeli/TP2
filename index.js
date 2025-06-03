import express from "express";
import router from "./src/routes/router.js"; 
import connection from "./src/config/connection.js";
import { SERVER_PORT } from "./src/config/config.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sincroniza los modelos con la base de datos
await connection.sync({ force: false });

// Rutas principales
app.use("/api", router);

// Arranque del servidor
app.listen(SERVER_PORT, () => {
  console.log(`🚀 Servidor corriendo en el puerto ${SERVER_PORT}`);
});
