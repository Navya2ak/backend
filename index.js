const express=require('express')
const app = express()
const router=express.Router()
const mongoose = require('mongoose')
const cors=require('cors')



//mongodb connection
mongoose.connect('mongodb://localhost:27017/register',{
}).then(()=>  console.log('database connected'))
.catch(err => console.log(err));

//routes
const route=require('./routes/user_router')

//variables 
app.use(express.json())
app.use(express.urlencoded(
{
    extended:false
}))
app.use(cors())

//middleware
app.use('/',route)
   
app.listen(9000, () => {
    console.log(`server is running on port}`)
})