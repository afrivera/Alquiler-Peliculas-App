const { DataTypes} = require('sequelize')
const db = require('./db');

const Cliente = db.define('cliente', {
    id_cliente: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    identificacion: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
},{
    createdAt: false,
    updatedAt: false
});

module.exports = {Cliente};