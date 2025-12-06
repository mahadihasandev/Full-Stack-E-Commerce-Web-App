const express = require('express')
const _= express.Router()
const AddCategoryController=require('../../controller/AddCategoryController')
const addSubCategoryController=require('../../controller/AddsubCategoryController')
_.post('/addcategory',AddCategoryController)
_.post('/addsubcategory',addSubCategoryController)

module.exports=_