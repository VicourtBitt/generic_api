const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const UserInfo = sequelize.define("UserInfo", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gender: {
        type: DataTypes.ENUM('Masculino', 'Feminino', 'Nao-Binario'),
        allowNull: false
    },
    age: {
        type: DataTypes.TINYINT,
        allowNull: false,
        validate: {
            min: 20,
            max: 90
        }
    },
    userRegisterId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "UserRegisters",
            key: "id"
        }
    }
})

module.exports = UserInfo