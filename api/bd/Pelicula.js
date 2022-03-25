const { DataTypes} = require('sequelize')
const db = require('./db');

const Pelicula = db.define('pelicula', {
    id_pelicula: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    nacionalidad: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    productora: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    actor_id: {
        type: DataTypes.INTEGER.UNSIGNED
    },
    director_id: {
        type: DataTypes.INTEGER.UNSIGNED
    }
},{
    createdAt: false,
    updatedAt: false
});

module.exports = {Pelicula};