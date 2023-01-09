const Sequelize = require('sequelize')
const configDB = require('../config/database')
const User = require('../Models/User')
const Order = require('../Models/Order')



const connection = new Sequelize(configDB)


User.init(connection)
Order.init(connection)


module.exports = connection