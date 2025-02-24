const mongoose = require("mongoose")

//Define the user schema.
const signupSchema = new mongoose.Schema({
    email:{
       type:String,
      required:true,
      unique: true 
    },
    designation:{
     type:String,
      required:true
    },
    department:{
        type:String,
         required:true
       },
    password:{
      type:String,
      required:true
    },
    role:{
        type:String,
        required:true
       },
})


const User = mongoose.model("users",signupSchema)

 module.exports= User;
