const employee = require('./employee');
const role = require('./role');
const department = require('./department');


department.hasMany(role, {
    foreignKey: 'department_id'
})

role.belongsTo(department, {
    foreignKey: 'department_id'
})

module.exports = { role, department, employee };