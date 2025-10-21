const express = require('express')
const _= express.Router()
const Registration=require('../../../controller/RegistrationController')

_.use('/registration',Registration)

module.exports=_