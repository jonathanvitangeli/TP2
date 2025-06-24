import dotenv from "dotenv";
dotenv.config();

export const DB_NAME = env.DB_NAME;
export const DB_USER = env.DB_USER;
export const DB_PASSWORD = env.DB_PASSWORD;
export const DB_HOST = env.DB_HOST;
export const DB_PORT = env.DB_PORT;
export const DB_DIALECT = env.DB_DIALECT;

export const SERVER_PORT = process.env.PORT || 3000;
