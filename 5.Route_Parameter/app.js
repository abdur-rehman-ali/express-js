const express = require('express')

const app = express()
const port = 3000

//Route parameters
app.get('/students/:id',(req,res)=>{
    const id = req.params.id
    res.send(`Hello world!!! ${id} `)
})

app.get('/:category/:id',(req,res)=>{
    const {id,category} = req.params
    res.send(`${id} - ${category}`)
})

app.get('/train/:from/:to',(req,res)=>{
    console.log(req.params);
    const {from,to} = req.params
    res.send(`Traveling from :${from} - ${to}`)
})

//Query string
app.get('/product',(req,res)=>{
    console.log(req.query);
    res.send(`Product`)
})

app.listen(port,()=>{
    console.log(`Project running on ${port}`);
})