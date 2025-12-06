const mongoose=require('mongoose')

const {Schema}=mongoose

const SubCategorySchema=new Schema({
    name:{
        type:String,
        require:true,
        unique:true,
    },
    ownerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'userinfo',
    }
})

module.exports=mongoose.model('subcategory',SubCategorySchema);