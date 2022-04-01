const mongoose=require('mongoose')
const phoneuser=new mongoose.Schema({
    username:{type:String},
   
    password:{type:Number}

},{timestamps:true})
module.exports=mongoose.model("phoneuser",phoneuser)
 