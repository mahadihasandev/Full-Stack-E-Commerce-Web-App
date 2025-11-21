const mongoose=require('mongoose')

const {Schema}=mongoose

let CategorySchema=Schema({
    name:{
        type:String,
        require:true,
        unique:true,
    },
    ownerId:{
        type:mongoose.Types.ObjectId,
        Ref:'userinfo',
        require:true,
    }
})

module.exports=CategorySchema