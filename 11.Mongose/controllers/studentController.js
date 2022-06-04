const path = require('path')

const index = (req,res)=>{
    res.sendFile(path.join(process.cwd(),'views','index.html'))
}

const about =  (req,res)=>{
    res.sendFile(path.join(process.cwd(),'views','about.html'))
}

module.exports = {index,about}