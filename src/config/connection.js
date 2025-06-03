import { Sequelize } from "sequelize";
import {
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_DIALECT
} from "./config.js";

const connection = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: DB_DIALECT,
});

try {
  await connection.authenticate();
  console.log("✅ Conexión establecida correctamente.");
} catch (error) {
  console.error("❌ No se pudo conectar a la base de datos:", error);
}

export default connection;
