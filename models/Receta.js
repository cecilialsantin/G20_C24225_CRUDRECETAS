const db = require("../data/db.js");
const { DataTypes } = require("sequelize");

const Receta = db.define("Receta", {
    nombre: { type: DataTypes.STRING, allowNull: false },
    descripcion: { type: DataTypes.TEXT }
});

module.exports = Receta;