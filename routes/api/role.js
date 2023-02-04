const express = require('express')
const router = express.Router();
const  { role, department, employee } = require("../../models")



router.get('/', async (req, res) => {
   const data = await role.findAll()

   res.json(data)
})
router.post('/', async (req, res) => {
    const data = await role.create({
        title: req.body.title,
        salary: req.body.salary,
        department_id: req.body.department_id
    })
 
    res.json(data)
 })
// localhost:3001/api/employee/seed
router.post('/seeds', async (req, res) => {


   await role.bulkCreate([
        {
            title:"Manager",
            salary:10000.00,
            
        },
        {
            title:"Manager",
            salary:10000.00,
            
        },
        {
            title:"Manager",
            salary:10000.00,
            
        },
        {
            title:"Manager",
            salary:10000.00,
           
        }

    ]);
     res.send("info seeded")
})
module.exports = router;