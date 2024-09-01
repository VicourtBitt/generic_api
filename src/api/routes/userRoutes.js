const express = require('express')
const userController = require('../controllers/UserController')

const router = express.Router()

router.post('/users', userController.createNewUser)
router.get('/users', userController.getRegisteredUsers)

module.exports = router