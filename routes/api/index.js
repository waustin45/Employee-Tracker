const express =require('express')
const router = express.Router();
const employee = require('./employee');
const role = require('./role');
const department = require('./department');
// localhost:3001/api/employee
router.use('/employees', employee);
// localhost:3001/api/role
router.use('/roles', role);
// localhost:3001/api/department
router.use('/departments', department);

module.exports = router;