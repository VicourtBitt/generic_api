const { sequelize } = require('./models')

sequelize.sync({force: true}).then(() => {
    console.log('Database has been created')
}).catch(error => {
    console.log(error)
})