const { DataTypes } = require("sequelize");
const db = require("../data/db");

const Ingrediente = db.define("Ingrediente", {
    recetaId: { type: DataTypes.INTEGER, allowNull: false },
    ingrediente: { type: DataTypes.STRING, allowNull: false },
    cantidad: { type: DataTypes.INTEGER, allowNull: false }
});

// Exportar el modelo antes de definir las asociaciones
module.exports = Ingrediente;

const Receta = require('./Receta');
Ingrediente.belongsTo(Receta, { foreignKey: 'recetaId' });




