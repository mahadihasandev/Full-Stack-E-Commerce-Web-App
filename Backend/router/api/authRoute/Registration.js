const express = require('express')
const _= express.Router()
const Registration=require('../../../controller/RegistrationController')
const secureApi = require('../../../middlewares/secureApi')

_.use('/registration',secureApi,Registration)

module.exports=_