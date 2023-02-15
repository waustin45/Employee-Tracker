const employee = require('./employee');
const role = require('./role');
const department = require('./department');


department.hasMany(role, {
    foreignKey: 'department_id'
})

role.belongsTo(department, {
    foreignKey: 'department_id'
})

role.hasMany(employee, {
    foreignKey: 'role_id'
})

employee.belongsTo(role, {
    foreignKey: 'role_id'
})

module.exports = { role, department, employee };