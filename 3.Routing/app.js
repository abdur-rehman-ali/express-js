//Routing

const express = require('express');

const app = express();
const port = 3000

app.get('/',(req,res)=>{
    res.send('Welcome to express')
})

//string path
app.get('/students',(req,res)=>{
    res.send('All students')
})

app.all('/all',(req,res)=>{
    res.send('All HTTP Methods')
})

//String pattern path
app.get('/ab?cd',(req,res)=>{
    res.send('This path will match acd and abcd')
})

//Regular expression  path
// app.get(/a/,(req,res)=>{
//     res.send('This path contain a')
// })

//One callback
app.get('/callback1',(req,res)=>{
    res.send('Contain one callback')
})

//More than one callback
app.get('/callback2',(req,res,next)=>{
    console.log('First callback')
    next()
},(req,res)=>{
    res.send('Second callback')
})

//array of callbacks
const callback1=(req,res,next)=>{
    console.log('1 callback');
    next()
}
const callback2=(req,res,next)=>{
    console.log('2 callback');
    next()
}
const callback3=(req,res)=>{
    res.send('Array of callbacks');
}

const arrayOfCallbacks = [callback1,callback2,callback3]
app.get('/arrayCallback',arrayOfCallbacks)

//Combination
//Chained route callback

app.route('/engineers')
.all((req,res,next)=>{
    console.log('Apply validtions')
    next()
})
.get((req,res)=>{
    console.log('Get method')
    res.send('All engineers')
})
.post((req,res)=>{
    res.send('POST method')
})
.put((req,res)=>{
    res.send('PUT method')
})

//Default page not found page
app.get('*',(req,res)=>{
    res.send('404:Page not found')
})

app.listen(port,()=>{
    console.log(`Example app listening on post : ${port}`);
})