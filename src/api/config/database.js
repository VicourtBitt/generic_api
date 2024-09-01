const { Sequelize } = require('sequelize')

const USER = 'root'
const PASSWORD = 'vicourt01'

const sequelize = new Sequelize('generalTest', USER, PASSWORD, {
    host: '0.0.0.0',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
})

module.exports = sequelize;