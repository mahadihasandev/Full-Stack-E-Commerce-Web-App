let emailRegex=require('../helper/EmailRegex')
let PasswordRegex=require('../helper/PasswordRegex')
let PasswordRegexEight=require('../helper/PasswordRegexEight')
const UserSchema = require('../model/UserSchema')

let Registration=(req,res)=>{  
    let {username,email,password}=req.body
    if(!username){
        res.send({error:"Pleaser Enter a user name"})
    }else if(!email){
        res.send({error:"Pleaser Enter a email"})
    }else if(!password){
        res.send({error:"Pleaser Enter a password"})
    }else if(!emailRegex(email)){
       res.send({error:"Enter a valid email"})
    }else if(!PasswordRegex(password)){
        res.send({error:"enter a at least 1 digit" })
    }else if(!PasswordRegexEight(password)){
          res.send({error:"enter a at least 8 character" })
    }else{
       let userData=new UserSchema({
        username,
        email,
        password,

       })
       userData.save()
       res.send({success:"data send"})
    }
}
module.exports=Registration