const { DataTypes } = require('sequelize')
const sequelize = require('../config/database.js')

const UserRegister = sequelize.define('UserRegister', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
    }, 
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
})

module.exports = UserRegister;