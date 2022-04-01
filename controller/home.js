const mongoose=require('mongoose')
const router=require('../routes/user_routes')
const express=require('express')
const app=express()
const route=express.Router()

app.use('/',router)

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/register')
.then(console.log("connected to database"))
.catch(console.log("not connected"))

app.listen(3000,console.log("connected "))