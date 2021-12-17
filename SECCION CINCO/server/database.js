const {Sequelize} = require('sequelize')

// Database connection
const sequelize = new Sequelize('<database>', 'root', 'root', {
    host: 'localhost',
    dialect: 'mariadb',
    logging: false,
 })
 

 
 
 module.exports = sequelize;
 