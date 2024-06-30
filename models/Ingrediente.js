const db = require("../data/db.js");
const { DataTypes } = require("sequelize");

const Ingrediente = db.define("Ingrediente", {
    recetaId: { type: DataTypes.INTEGER, allowNull: false },
    ingrediente: { type: DataTypes.STRING, allowNull: false },
    cantidad: { type: DataTypes.INTEGER, allowNull: false }
});

module.exports = Ingrediente;

