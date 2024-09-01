const appDB = require('./src/api/app.js')
const PORT = $PORT
appDB.listen(PORT, () => {
    console.log(`Listening to http://localhost:${PORT}`)
})