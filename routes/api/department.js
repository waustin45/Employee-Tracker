const express = require('express')
const router = express.Router();
const  { role, department, employee } = require("../../models")



router.get('/', async (req, res) => {
   const data = await department.findAll({
    include: [
        {
            model: role,
            attributes: ['department_id']
        }
    ], 
    
   })
   
   res.json(data)
   
})
router.post('/', async (req, res) => {
    const data = await department.create({
        name: req.body.name
    })
 
    res.json(data)
 })
 router.delete('/:id', async (req, res) => {
    
    const data = await department.destroy({
       where: {
        id: req.params.id
       } 
    })
 
    res.json(data)
 })
// localhost:3001/api/department/seed
router.post('/seeds', async (req, res) => {


   await department.bulkCreate([
        {
            name:"sales",
            
            
        },
        {
            name:"Marketing",
            
        },
        {
            name:"Accounting",
            
        },
        {
            name:"Engineering",
           
        }

    ]);
     res.send("info seeded")
})
module.exports = router;