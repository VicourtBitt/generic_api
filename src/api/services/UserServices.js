const { UserRegister, UserInfo } = require("../models")

const createRegister = async (reqData) => {
    const { cpf, name, surname, gender, age } = reqData
    const register = await UserRegister.create({ cpf })

    return createInfo({
        name, surname, gender, age, userRegisterId: register.id
    })
}

const createInfo = async (reqData) => {
    const { name, surname, gender, age, userRegisterId } = reqData
    const info = await UserInfo.create({ 
        name,
        surname,
        gender,
        age,
        userRegisterId
    })

    return { info }
}

const getAllUsers = async () => {
    const allUsers = UserRegister.findAll({
        include: {
            model: UserInfo
        }
    })

    return allUsers
}

module.exports = {
    createInfo,
    createRegister,
    getAllUsers
}