const { DataTypes} = require('sequelize')
const db = require('./db');

const AlquilarPelicula = db.define('alquilar_pelicula', {
    id_alquiler: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    fecha_alquiler: {
        type: DataTypes.DATE,
        allowNull: false
    },
    fecha_devolucion: {
        type: DataTypes.DATE,
        allowNull: false
    },
    cliente_id: {
        type: DataTypes.INTEGER.UNSIGNED
    },
    ejemplar_id: {
        type: DataTypes.INTEGER.UNSIGNED
    }
},{
    createdAt: false,
    updatedAt: false
});

module.exports = {AlquilarPelicula};
