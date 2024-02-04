// import Statement =========

const config = require('../config')
const Sequelize = require('sequelize') 


// DataBase Connectivity ==============

const sequelize = new Sequelize(config.DATABASE, config.USER, config.PASSWORD, {
    dialect: config.DATABASE,
    host: config.HOST
})


// Veribale for database Methods and Schemas ================

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.userSignup = require('./signup')(sequelize, Sequelize)


// Export statement ==================

module.exports = db;