const express = require('express')
const router = express.Router();
const  { role, department, employee } = require("../../models")



router.get('/', async (req, res) => {
   const data = await employee.findAll()

   res.json(data)
})
router.post('/', async (req, res) => {
    const data = await employee.create({
       first_name: req.body.first_name,
        last_name: req.body.last_name,
        role_id: req.body.role_id
        
    })
 
    res.json(data)
 })
// localhost:3001/api/employee/seed
router.post('/seeds', async (req, res) => {


   await employee.bulkCreate([
        {
            first_name:"Bob",
            last_name:"Howard",
            role_id: 1
            
        },
        {
            first_name:"John",
            last_name:"Howard",
            role_id: 2
            
        },
        {
            first_name:"Bill",
            last_name:"Howard",
            role_id: 3
            
        },
        {
            first_name:"Joanna",
            last_name:"Howard",
            role_id: 4
           
        }

    ]);
     res.send("info seeded")
})
module.exports = router;