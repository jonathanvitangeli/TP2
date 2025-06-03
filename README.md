# 💈 API RESTful - Barbería

Este proyecto es una API RESTful desarrollada con **Node.js**, **Express** y **Sequelize** para la gestión de turnos en una barbería. Implementa operaciones CRUD para clientes, barberos, servicios y turnos.

## 🧱 Tecnologías utilizadas

- Node.js
- Express
- Sequelize
- PostgreSQL (o MySQL)
- dotenv
- express-validator
- nodemon (dev)

---

## 📁 Estructura del proyecto

src/
├── config/ # Configuración de conexión a la DB
├── controllers/ # Controladores (lógica de negocio)
├── models/ # Definición de modelos Sequelize
├── routes/ # Definición de rutas por recurso
├── services/ # Servicios por entidad
└── index.js # Punto de entrada principal