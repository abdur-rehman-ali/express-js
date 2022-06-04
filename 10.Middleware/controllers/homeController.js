const path = require('path')

const  home = (req,res)=>{
    res.render('index',{'title':'Express learning'})
}

const  about = (req,res)=>{
    res.render('about',{'title':'About learning'})
}

module.exports = {home,about}