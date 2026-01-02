const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ibm', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
