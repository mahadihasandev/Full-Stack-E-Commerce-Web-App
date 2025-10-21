const express = require('express')
const _= express.Router()

_.use('/registration',(req,res)=>{
    res.send("registration")
})

module.exports=_