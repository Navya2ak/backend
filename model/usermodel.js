const mongoose=require('mongoose')
const usermodel=new mongoose.Schema(
    {
        name:{type:String},
        username:{type:String},
         password:{type:Number}
    },{timestamps:true}
)
module.exports=mongoose.model("newmodel",usermodel)
