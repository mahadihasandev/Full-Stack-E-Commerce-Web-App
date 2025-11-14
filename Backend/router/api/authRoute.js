const express = require('express')
const _= express.Router()
const LoginController=require('../../controller/LoginController')
const RegistrationController=require('../../controller/RegistrationController')
const secureApi = require('../../middlewares/secureApi')
const Otp=require('../../controller/OtpController')

_.use('/otp',Otp)
_.use("/registration",secureApi,RegistrationController)
_.use("/login",LoginController)

module.exports=_