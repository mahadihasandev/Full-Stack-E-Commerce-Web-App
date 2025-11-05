const express = require('express')
const _= express.Router()
const Registration=require('../../../controller/RegistrationController')
const secureApi = require('../../../middlewares/secureApi')
const Otp=require('../../../controller/OtpController')

_.use('/registration',secureApi,Registration)
_.use('/otp',Otp)

module.exports=_