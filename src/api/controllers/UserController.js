const userServices = require('../services/UserServices')

/**
  * Call the user "creation" function in
  * UserServices (receives all the params)
  */
const createNewUser = async (req, res) => {
    try {
        const user = await userServices.createRegister(req.body)
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

/**
  * Call the "getAllUsers" from UserServices
  */
const getRegisteredUsers = async (req, res) => {
    try {
        const users = await userServices.getAllUsers()
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json()
    }
}

module.exports = {
    getRegisteredUsers,
    createNewUser
}