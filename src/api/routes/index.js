const express = require('express')
const cors = require('cors')
const corsConfig = {
    origin: "*",
    credentials: true,
    optionSucessStatus: 200
}
const userRoutes = require('./userRoutes')

module.exports = appDB => {
    appDB.use(
        express.json(),
        cors(corsConfig),
        userRoutes
    )
}