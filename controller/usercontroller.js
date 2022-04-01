const express=require('express')
// const dotenv=require('dotenv')
// dotenv.config()
const usermodel=require('../model/usermodel')
const user=require('../model/authM')
const jwt = require('jsonwebtoken');
const app=express()
exports.register=async(req,res)=>
{const value=await usermodel.findOne({username:req.body.username})
if(value)
    {
        res.json({message:"data already exist"})
    }
else 
{
    await usermodel.create({
        name:req.body.name,
        username:req.body.username,
        password:req.body.password
     }).then((data)=>{
         return res.status(200).json({status:'sucess',message: 'registered',data})
         
     }).catch((err)=>{

       return  res.status(400).json({status:'error',message: 'db error'})
     });
    }
}

exports.users=async(req,res)=>
{
    res.status(200).json({message:"can accessible"})
}


exports.login = async (req, res) => {
    let username=req.body.username
    let password=req.body.password
   

    await usermodel.findOne({username:username,password:password}).then(async(UserData)=>{
console.log(UserData)
         if(UserData)
         {
            let user={UserData}
            const token=jwt.sign(user,"Tiger");


            await user.create({
                user_id : UserData.id,
                token  : token,
                status:true,
            }).then(async (user) => {
                if(users_authentication){
                    return res.status(200).json({
                        status: "success",
                        message: "Successfully login",
                        token: user.token,
                    });

                }
                else
                {

                    return res.status(200).json({
                        status: "error",
                        message: "Login: Token authorization error",
                    });

                }
            });


         }
         else
         {
            return res.status(401).json({status:'error',message:'Invalid Login'}) 
         }
         
       
    }).catch((err)=>{
        return res.status(400).json({status:'error',message:'db errors'})
    })


}