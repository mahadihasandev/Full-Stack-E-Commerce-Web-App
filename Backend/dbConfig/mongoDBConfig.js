const mongoose = require('mongoose');


const mongoDBConfig=()=>{
    mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.iakozvn.mongodb.net/${process.env.DB_NAME}?appName=Cluster0`)
    .then(()=>console.log("Connected"))
}

module.exports=mongoDBConfig

//  mongodb+srv://arnob4all_db_user:3jpJqBItB5sDkkU5@cluster0.iakozvn.mongodb.net/usercredential?appName=Cluster0
