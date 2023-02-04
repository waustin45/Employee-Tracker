const express = require('express')
const router = express.Router();
const  { role, department, employee } = require("../../models")



router.get('/', async (req, res) => {
   const data = await department.findAll()

   res.json(data)
})
router.post('/', async (req, res) => {
    const data = await department.create({
        name: req.body.name
    })
 
    res.json(data)
 })
// localhost:3001/api/employee/seed
router.post('/seeds', async (req, res) => {


   await department.bulkCreate([
        {
            name:"sales",
            
            
        },
        {
            name:"sales",
            
        },
        {
            name:"sales",
            
        },
        {
            name:"sales",
           
        }

    ]);
     res.send("info seeded")
})
module.exports = router;