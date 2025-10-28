require('dotenv').config()
var cors = require('cors')
const express = require('express')
const app = express()
const port = 3000
const router=require('./router')
let mongoDBConfig=require('./dbConfig/mongoDBConfig')


app.use(cors())
app.use(express.json())
app.use(router)

mongoDBConfig()
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
