const mongoose=require('mongoose')

const {Schema}=mongoose

const UserSchema=new Schema({
    username:{
        type:String,
        require:true,
    },
     email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
})

module.exports=mongoose.model('userInfo', UserSchema);