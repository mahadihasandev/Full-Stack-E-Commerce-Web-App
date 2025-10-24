const mongoose = require('mongoose');
let DBUserName=process.env.DB_USERNAME
let DBPassword=process.env.DB_PASSWORD

const mongoDBConfig=()=>{
    mongoose.connect(`mongodb+srv://${DBUserName}:${DBPassword}@cluster0.sfbfczy.mongodb.net/userCredential?appName=Cluster0`);
}

module.exports=mongoDBConfig