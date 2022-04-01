const express=require('express')
const ctrl=require('../controller/usercontroller')
const router=express.Router()
router.post('/register',ctrl.register)
router.post('/login',ctrl.login)
const check=require('../controller/middleware/authcheck')
//middleware function
//need to create in another folder thalkalikam mathram
// function check(req,res,next)
// {
//  console.log("its accessible")
//     next()
// }
//route ,middleware function,if accessible then what next
router.get('/users',check,ctrl.users)

module.exports=router
