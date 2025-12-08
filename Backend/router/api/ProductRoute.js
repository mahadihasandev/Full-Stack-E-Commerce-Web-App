const express = require('express')
const _= express.Router()
const AddCategoryController=require('../../controller/AddCategoryController')
const addSubCategoryController=require('../../controller/AddsubCategoryController')
const ViewCategoryController = require('../../controller/ViewCategoryController')
const ViewSubCategoryController = require('../../controller/ViewSubCategoryController')
_.post('/addcategory',AddCategoryController)
_.post('/addsubcategory',addSubCategoryController)

_.get('/viewcategory',ViewCategoryController)
_.get('/viewsubcategory',ViewSubCategoryController)

module.exports=_