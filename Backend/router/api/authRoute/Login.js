const express = require('express')
const _= express.Router()

_.use('/login',(req,res)=>{
    res.send("login")
})

module.exports=_