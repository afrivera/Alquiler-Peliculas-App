const { DataTypes} = require('sequelize')
const db = require('./db');

const Actores = db.define('actore', {
    id_actor: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING(80),
        allowNull: false
    },
    nacionalidad: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    sexo: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    tipo_actor: {
        type: DataTypes.ENUM('Principales', 'Extras'),
        allowNull: false
    }
},{
    createdAt: false,
    updatedAt: false
});

module.exports ={ Actores};