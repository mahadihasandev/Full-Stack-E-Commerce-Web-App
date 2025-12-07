const subCategorySchema = require("../model/SubCategorySchema");


const AddsubCategoryController=async (req,res)=>{
    let {name,ownerId,categoryId}=req.body
        console.log(name,ownerId,categoryId);

        let existSubCategory=subCategorySchema.findOne({name:name})
        if(existSubCategory){
            res.send({error:"Subcategory already exist"})
        }else{
            let subCategoryData=new subCategorySchema({
                name:name,
                ownerId:ownerId,
                categoryId:categoryId
            })
            subCategoryData.save()
            res.send({success:"New Subcategory created"})
        }
}

module.exports=AddsubCategoryController