const express = require('express') 
const router = express.Router()

//All routes related to students 
router.get('/all',(req,res)=>{
    res.send('All students data')
})

module.exports = router