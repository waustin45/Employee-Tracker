const express = require('express')
const router = express.Router();
const  { role, department, employee } = require("../../models")



router.get('/', async (req, res) => {
   const data = await role.findAll({
    include: [
        {
            model: employee,
            
        }
    ]
   })

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
            title:"SalesPerson",
            salary:75000.00,
            department_id: 1
            
        },
        {
            title:"Advertiser",
            salary:10000.00,
            department_id: 2
            
        },
        {
            title:"Accountant",
            salary:120000.00,
            department_id: 3
            
        },
        {
            title:"Engineer",
            salary:130000.00,
            department_id: 4
           
        }

    ]);
     res.send("info seeded")
})
module.exports = router;