const UserSchema = require("../model/UserSchema")
var jwt = require('jsonwebtoken');

let otp=async (req,res)=>{

   let {otp,email}=req.body
   var decoded = jwt.verify(token, 'shhhhh');
   let existUser=await UserSchema.findOne({email:email})
   if(existUser){
        if(!existUser.emailVerified&&otp==existUser.otp){          
            await UserSchema.findOneAndUpdate({email:email},{otp:"",emailVerified:true})
             res.send({success:"Registration complete"}) 
        }else{
            res.send({error:"Please enter a valid otp"})                       
        }        
   }else{
        res.send({error:"user does not exist"})
   }  
}

module.exports=otp