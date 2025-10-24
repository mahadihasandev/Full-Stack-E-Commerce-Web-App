const UserSchema = require("../model/UserSchema")

let Login=async(req,res)=>{ 

    let allUserData=await UserSchema.find({})
    res.send(allUserData)
}

module.exports=Login