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

//path function
// console.log(studentScheme.path('age'));

//Creating models - Compiling scheme
const studentModel = mongoose.model('student',studentScheme)



const createDocument = async ()=>{
    try {
        //Creating new document
        const studentDocument = new studentModel({
        name:'ali joiya',
        age:20,
        fees:34234,
        hobbies:['cricket','music','traveling'],
        isActive:false,
        comments:[{value:'First comment'}] 
        })

        //Saving document
        const result = await  studentDocument.save()

        console.log(result);
        
    } catch (error) {
        console.log(error);
    }

} 

module.exports = createDocument