const UserSchema = require("../model/UserSchema")

let otp=async (req,res)=>{

   let {otp,email}=req.body
   
   let existUser=await UserSchema.findOne({email:email})
   if(existUser){
        if(otp==existUser.otp){
            await UserSchema.findOneAndUpdate({email:email},{otp:""})
             res.send({success:"Registration complete"}) 
        }else{
            res.send({error:"Please enter a valid otp"})                       
        }        
   }else{
        res.send({error:"user does not exist"})
   }  
}

module.exports=otp