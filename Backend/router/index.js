const express = require('express')
const _= express.Router()
const Auth=require('./api')
const Api='/api/v1'

_.use(Api,Auth)

module.exports=_