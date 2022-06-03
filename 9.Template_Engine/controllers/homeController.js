const path = require('path')

const  home = (req,res)=>{
    res.render('index',{'title':'Express learning'})
}

module.exports = home