const express =require('express')
const router = express.Router();
const api = require('./api');
// localhost:3001/api
router.use('/api', api);

module.exports = router;