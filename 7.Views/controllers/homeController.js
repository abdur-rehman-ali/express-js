const path = require('path')

const  home = (req,res)=>{
    res.sendFile(path.join(process.cwd(),'views','index.html'))
}

module.exports = home