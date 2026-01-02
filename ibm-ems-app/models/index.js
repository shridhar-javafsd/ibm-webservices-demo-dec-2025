const sequelize = require('../config/db');
const Employee = require('./employee');
const Department = require('./department');
const Project = require('./project');

Department.hasMany(Employee);
Employee.belongsTo(Department);

Employee.belongsToMany(Project, { through: 'EmployeeProjects' });
Project.belongsToMany(Employee, { through: 'EmployeeProjects' });

module.exports = { sequelize, Employee, Department, Project };
