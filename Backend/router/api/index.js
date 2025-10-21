const express = require('express')
const _= express.Router()
let Registration=require('./authRoute/Registration')
let Login=require('./authRoute/Login')
_.use("/auth",Registration)
_.use("/auth",Login)

module.exports=_