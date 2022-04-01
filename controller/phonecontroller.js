const usermodel=require('../model/modeluser')
exports.save= async(req,res)=>{
    const phoneno = /^[0-9]{10}$/
    if(req.body.name.length<2)
    {
return res.status(400).json({message:"error in name"})
    }
    else if(req.body.age>100)
    {
    return res.status(400).json({message:"error number"})
    }
    else{
await usermodel.create({
            name:req.body.name,
            age:req.body.age
         }).then((data)=>{
             res.status(200).json({status:'sucess',message: 'successfully create',data})
 
         }).catch((err)=>{
 
             res.status(400).json({status:'error',message: 'db error'})
         });
   
     }
    }
    exports.first=async(req,res)=>{
        await usermodel.create({
            name:req.body.name,
            age:req.body.age

        }).then(data=>{return res.status(200).json({message:"success"})})
        .catch(err=> {return res.status(400).json({message:"error"})} )

    }
exports.show=async(req,res)=>{
    await usermodel.find().sort({createdAt:-1}).then((data)=>{
        res.status(200).json({status:"success",message:"success!!!!!!!!!!!!",data:data})
    }).catch((error)=>{
        res.status(400).json({status:"error",message:"error found"})
    })
}
exports.showone=async(req,res)=>{
    await usermodel.findOne().then((data)=>{
        res.status(200).json({status:"success",message:"success!!!!!!!!!!!!",data:data})
    }).catch((error)=>{
        res.status(400).json({status:"error",message:"error found"})
    })
}
// passing id as parameter 
exports.singleShow=async (req,res)=>{
    
    await usermodel.findById(req.params.id).then((data)=>{

    return res.status(200).json({status:'sucess',message: '',data:data})
}).catch((err)=>{

         return res.status(400).json({status:'error',message: 'db error'})
     });

 }

exports.delete=async (req,res)=>
{
    await usermodel.findByIdAndDelete(req.body.id)
    .then(res.status(200).json({status:"ok",message:"deleted"})).catch((error)=>{
        res.status(400).json({status:"error",message:"error found"})
    })
}


//here passing name as the key for the updation ,so need to use findOneAndUpdate
exports.update=async(req,res)=>{

    await usermodel.findOneAndUpdate({name:'rashid '},
    {
        name:req.body.name,
        phone:req.body.phone    })
        .then(res.status(200).json({status:"updated",message:"successfully updated"}))
        .catch(error=>{res.status(400).json({status:"error",message:"error found"})

        })
    }
    exports.replc=async(req,res)=>{

        await usermodel.findOneAndReplace({name:'kurukkan'},
        {
            name:req.body.name})
            .then(res.status(200).json({status:"updated",message:"successfully updated"}))
            .catch(error=>{res.status(400).json({status:"error",message:"error found"})
    
            })
        }
        exports.reone=async(req,res)=>{

            await usermodel.replaceOne({name:'swarnamma'},
            {
                name:req.body.name})
                .then(data=> {return res.status(200).json({status:"updated",message:"successfully updated"})})
                .catch(error=>{res.status(400).json({status:"error",message:"error found"})
        
                })
            }
exports.updatename=async(req,res)=>
{
    await usermodel.findOneAndUpdate(req.body.id,
        {
        name:req.body.name
    
    })
    .then(res.status(200).json({status:"ok,",message:"updated"}))
    .catch(error=>{res.status(400).json({status:"error",messaage:"error found"}

    )
        
    })
}

exports.complete=async(req,res)=>{
    await usermodel.findOneAndUpdate({name:"mani"},{
    name:req.body.name,
            age:req.body.age})
    .then(res.status(200).json({message:"updated completely"}))
    .catch(res.status(400).json({message:"error"}))
}

exports.deletion=async(req,res)=>{
    await usermodel.deleteMany({age:{$gt:40}}).then(res.status(200).json({message:"deleted many"}))
    .catch(err=>res.status(400).json({message:err}))

}
    
exports.deleteone=async(req,res)=>{
    await usermodel.deleteOne({name:"lolan"}).then(res.status(200).json({message:"deleted one"}))
    .catch(res.status(400).json({message:"error found"}))
}


exports.remove=async(req,res)=>{
    await usermodel.findByIdAndRemove(req.body.id)
    .then(data=>{
        res.status(200).json({message:"removed"});

        })
    .catch(err=>{
        res.status(400).json({message:"error"});
    })
}

exports.updateid=async(req,res)=>


{
    await usermodel.findOneAndUpdate({name:"lolan"},
        {
       age:69
    
    }).then(data=>
    {
        return res.status(200).json({message:"updated"})
    }
        )
    .catch(err=>
        {res.status(400).json({message:"error"})
    })
}
exports.many=async(req,res)=>{
    await usermodel.updateMany({age:{$gt:50}}, {name:req.body.name}).then((data)=>{
        
        return res.status(200).json({message:"updated",data:data});
    })
    .catch((err)=>{
        return res.status(400).json({message:"error"})
    })
    }
   
