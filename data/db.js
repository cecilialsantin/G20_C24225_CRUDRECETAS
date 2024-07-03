require('dotenv').config(); // Cargar las variables de entorno

const { Sequelize } = require("sequelize");

// Usar las variables de entorno para configurar Sequelize
const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: process.env.DB_PORT
});

module.exports = db;
