const { DataTypes} = require('sequelize')
const db = require('./db');

const Ejemplar = db.define('ejemplare', {
    id_ejemplar: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    pelicula_id: {
        type: DataTypes.INTEGER.UNSIGNED
    }
},{
    createdAt: false,
    updatedAt: false
});

module.exports = {Ejemplar};