const UserSchema = require("../model/UserSchema")

let Login=async(req,res)=>{  
    let {email,password}=req.body


    let existUser=await UserSchema.findOne({email:email})
    console.log(existUser);
    if(existUser){
        
        
    }
}
module.exports=Login