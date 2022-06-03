const express = require('express') 
const router = express.Router()

//All routes related to teacher 
router.get('/all',(req,res)=>{
    res.send('All Teachers data')
})

module.exports = router