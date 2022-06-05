const mongoose = require('mongoose')

const studentScheme = new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    age:{type:Number,required:true,min:18,max:70},
    fees:{type:Number,required:true,validate:v=> v>=5500.50 },
    hobbies:{type:Array},
    isActive:{type:Boolean},
    comments:[{value:{type:String}} , {publish:{type:Date,default:Date.now}}],
    join:{type:Date,default:Date.now},
})

//Creating models - Compiling scheme
const studentModel = mongoose.model('student',studentScheme)