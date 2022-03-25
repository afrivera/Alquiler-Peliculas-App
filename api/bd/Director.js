const { DataTypes} = require('sequelize')
const db = require('./db');

const Director = db.define('directore', {
    id_director: {
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
    nacionalidad: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
},{
    createdAt: false,
    updatedAt: false
})

module.exports ={ Director};