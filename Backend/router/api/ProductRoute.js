const express = require('express')
const _= express.Router()
const AddCategoryController=require('../../controller/AddCategoryController')

_.post('/addcategory',AddCategoryController)

module.exports=_