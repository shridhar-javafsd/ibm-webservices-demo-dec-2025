const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

module.exports = sequelize.define('Project', {
    name: DataTypes.STRING,
    budget: DataTypes.DOUBLE
});
