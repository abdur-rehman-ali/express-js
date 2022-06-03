const express = require('express')
//import student and teacher 
const student = require('./routes/student.js')
const teacher = require('./routes/teacher.js')

const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send('Hello world!!!')
})

//Load router modules
app.use('/students',student)
app.use('/teachers',teacher)


app.listen(port,()=>{
    console.log(`Project running on ${port}`);
})