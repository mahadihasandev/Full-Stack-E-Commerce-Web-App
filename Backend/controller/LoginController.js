const UserSchema = require("../model/UserSchema")
const bcrypt = require('bcrypt');

let Login=async(req,res)=>{  
    let {email,password}=req.body

    let existUser=await UserSchema.findOne({email:email})
    console.log(existUser);
    if(existUser){
         bcrypt.compare(password, existUser.password, function(err, result) {
            if(result){
                res.send({
                    username:existUser.username,
                    email:existUser.email,
                    emailVerified:existUser.emailVerified,
                    role:existUser.role
                })
            }else{
                res.send('wrong user name or password')
            }
    })       
    }else{
        res.send('User Does not exist')
    }
}
module.exports=Login