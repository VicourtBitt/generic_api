const appDB = require('./src/api/app.js')
const PORT = 3002
appDB.listen(PORT, () => {
    console.log(`Listening to http://localhost:${PORT}`)
})