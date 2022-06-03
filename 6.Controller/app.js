const express = require('express')
const student = require('./routes/student.js')

const app = express()
const port = 3000


app.get('/',(req,res)=>{
    res.send(`Home!!!`)
})

app.use('/students',student)

app.listen(port,()=>{
    console.log(`Project running on ${port}`);
})