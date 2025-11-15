const express = require('express')
const _= express.Router()
const LoginController=require('../../controller/LoginController')
const RegistrationController=require('../../controller/RegistrationController')
const secureApi = require('../../middlewares/secureApi')
const Otp=require('../../controller/OtpController')
const ForgetPassword=require('../../controller/ForgetPasswordController')

_.use('/otp',Otp)
_.use("/registration",secureApi,RegistrationController)
_.use("/login",LoginController)
_.use("/forgetpassword",ForgetPassword)

module.exports=_