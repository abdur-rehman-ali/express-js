const express = require('express')
const student = require('./routes/student.js')

const app = express()
const port = 3000


app.get('/',(req,res)=>{
    res.send('Hello world')
})


app.use('/student',student)


app.listen(port,(req,res)=>{
    console.log(`Project running on ${port}`);
})

