const express = require('express')
const path = require('path')
const homeRoutes = require('./routes/homeRoutes.js')

const app = express()
const port = 3000

//Static files
app.use(express.static(path.join(process.cwd(),'public')))

//Set up directory where template files are located
// app.set('views','./views')

//Set up template engine to use
app.set('view engine','ejs')

app.use('/',homeRoutes)

app.listen(port,()=>{
    console.log(`Project running on ${port}`);
})