const express = require('express')
const path = require('path')
const myLogger = require('./middleware/logger-middleware.js')
const homeRoutes = require('./routes/homeRoutes.js')

const app = express()
const port = 3000

//Static files
app.use(express.static(path.join(process.cwd(),'public')))

//Application level middleware
// app.use(myLogger)

//Path level middleware
app.use('/about',myLogger)

//Set up template engine to use
app.set('view engine','ejs')

app.use('/',homeRoutes)

app.listen(port,()=>{
    console.log(`Project running on ${port}`);
})