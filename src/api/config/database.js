const { Sequelize } = require('sequelize')

const USER = 'root'
const PASSWORD = 'vicourt01'

const sequelize = new Sequelize('generalTest', USER, PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
})

module.exports = sequelize;