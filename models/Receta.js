const { DataTypes } = require("sequelize");
const db = require("../data/db");

const Receta = db.define("Receta", {
    nombre: { type: DataTypes.STRING, allowNull: false },
    descripcion: { type: DataTypes.TEXT }
});

// Exportar el modelo antes de definir las asociaciones
module.exports = Receta;

const Ingrediente = require('./Ingrediente');
Receta.hasMany(Ingrediente, { foreignKey: 'recetaId', as: 'ingredientes' });

