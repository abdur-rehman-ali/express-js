const express = require('express')
const homeRoutes = require('./routes/homeRoutes.js')

const app = express()
const port = 3000


app.get('/',(req,res)=>{
    res.send(`Home!!!!!!`)
})

app.use('/home',homeRoutes)

app.listen(port,()=>{
    console.log(`Project running on ${port}`);
})