const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

module.exports = sequelize.define('Employee', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    salary: DataTypes.DOUBLE
});
