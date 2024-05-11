const dbCOnfig = require('../configs/configs')
const Sequelize = require('sequelize')

// conecting MySQL database
const sequelize = new Sequelize(dbCOnfig.DB, dbCOnfig.USER, dbCOnfig.PASSWORD, {
    host: dbCOnfig.HOST,
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}