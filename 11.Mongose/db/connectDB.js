const mongoose = require('mongoose')

const connecDB = (DATABASE_URL)=>{
    return mongoose.connect(DATABASE_URL)      
        .then(()=>{
            console.log('Database connected');
        })
        .catch((error)=>{
            console.log(error);
        })
}

module.exports = connecDB