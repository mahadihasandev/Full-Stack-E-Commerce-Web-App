const express = require('express')
const _= express.Router()
const AddCategoryController=require('../../controller/AddCategoryController')
const addSubCategoryController=require('../../controller/AddsubCategoryController')
const ViewCategoryController = require('../../controller/ViewCategoryController')
_.post('/addcategory',AddCategoryController)
_.post('/addsubcategory',addSubCategoryController)

_.get('/viewcategory',ViewCategoryController)

module.exports=_