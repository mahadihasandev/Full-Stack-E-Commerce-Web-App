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
    otp:{
        type:String,
    },
    emailVerified:{
        type:Boolean,
        default:false,
    }
})

module.exports=mongoose.model('userInfo', UserSchema);