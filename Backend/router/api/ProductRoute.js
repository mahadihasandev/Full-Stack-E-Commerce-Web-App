const express = require('express')
const _= express.Router()
const AddCategoryController=require('../../controller/AddCategoryController')
const addSubCategoryController=require('../../controller/AddsubCategoryController')
const ViewCategoryController = require('../../controller/ViewCategoryController')
const ViewSubCategoryController = require('../../controller/ViewSubCategoryController')
const AddProductController = require('../../controller/AddProductController')
_.post('/addcategory',AddCategoryController)
_.post('/addsubcategory',addSubCategoryController)
_.post('/addproduct',AddProductController)
_.get('/viewcategory',ViewCategoryController)
_.get('/viewsubcategory',ViewSubCategoryController)

module.exports=_