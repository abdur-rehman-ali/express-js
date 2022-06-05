const express = require('express')
const path = require('path')
const student = require('./routes/studentRoutes.js')
const connectDB = require('./db/connectDB.js')
const app = express()


const port = 3000
const DATABASE_URL = 'mongodb://localhost:27017/schooldb'

connectDB(DATABASE_URL)
//Static files
app.use(express.static(path.join(process.cwd(),'public')))


app.get('/',(req,res)=>{
    res.send('Hello world')
})


app.use('/student',student)


app.listen(port,(req,res)=>{
    console.log(`Project running on ${port}`);
})

