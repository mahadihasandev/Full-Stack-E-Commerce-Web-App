const CategorySchema = require("../model/CategorySchema");


const AddCategoryController=(req,res)=>{
    let {name,ownerId}=req.body

let existCategory=CategorySchema.find({name:name})
if(existCategory){
 res.send({error:"Category Already Exist"})
}else{
    let categoryData=new CategorySchema({
    name:name,
    ownerId:ownerId,
})
categoryData.save()
}
}

module.exports=AddCategoryController