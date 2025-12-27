const express = require('express')
const _= express.Router()
const multer = require('multer')

const AddCategoryController=require('../../controller/AddCategoryController')
const addSubCategoryController=require('../../controller/AddsubCategoryController')
const ViewCategoryController = require('../../controller/ViewCategoryController')
const ViewSubCategoryController = require('../../controller/ViewSubCategoryController')
const AddProductController = require('../../controller/AddProductController')


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null,uniqueSuffix+ '-' + file.originalname )
    console.log(file);
    
  }
})

const upload = multer({ storage: storage })



_.post('/addcategory',AddCategoryController)
_.post('/addsubcategory',addSubCategoryController)
_.post('/addproduct',upload.single('productImg'),AddProductController)
_.get('/viewcategory',ViewCategoryController)
_.get('/viewsubcategory',ViewSubCategoryController)

module.exports=_