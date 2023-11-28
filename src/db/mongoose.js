const mongoose=require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("db connected successfully")
})
.catch((err)=>{
    console.log(err);
})
module.exports=mongoose;