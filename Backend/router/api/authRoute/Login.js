const express = require('express')
const _= express.Router()
const Login=require('../../../controller/LoginController')

_.use('/login',Login)

module.exports=_