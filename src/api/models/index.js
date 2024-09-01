const sequelize = require('../config/database')
const UserInfo = require('./userInfo')
const UserRegister = require('./userRegister')

UserRegister.hasOne(UserInfo, {
    foreignKey: 'userRegisterId',
    onDelete: 'CASCADE'
})
UserInfo.belongsTo(UserRegister, {
    foreignKey: 'userRegisterId',
    onDelete: 'CASCADE'
})

module.exports = {
    sequelize,
    UserRegister,
    UserInfo
}