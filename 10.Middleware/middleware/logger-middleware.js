
const myLogger=(req,res,next)=>{
    console.log('Logged in');
    next()
}

module.exports = myLogger