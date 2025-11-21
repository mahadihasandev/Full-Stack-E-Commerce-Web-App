const AddCategoryController=(req,res)=>{
    let {name,ownerId}=req.body
    console.log(name);
    console.log(ownerId);
}

module.exports=AddCategoryController