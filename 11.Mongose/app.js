const express = require('express')
const path = require('path')
const student = require('./routes/studentRoutes.js')
const connectDB = require('./db/connectDB.js')
const app = express()

const createDocument = require('./models/Student.js')

const port = 3000
const DATABASE_URL = 'mongodb://localhost:27017/schooldb'

connectDB(DATABASE_URL)
//Static files
app.use(express.static(path.join(process.cwd(),'public')))

//Create and save data
// createDocument()

app.get('/',(req,res)=>{
    res.send('Hello world')
})


app.use('/student',student)


app.listen(port,(req,res)=>{
    console.log(`Project running on ${port}`);
})

