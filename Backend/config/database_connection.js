const mongoose = require("mongoose");


console.log('mongodb://0.0.0.0:27017/myToDoAppDB');

mongoose.set('strictQuery', false);
const connectionDB = ()=>{
    mongoose.connect('mongodb://0.0.0.0:27017/myToDoAppDB',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(console.log("DB connected successfully"))
    .catch(err=>{console.log('DB connection failed')
    console.log(err)
    process.exit(1)    
    })
}

module.exports = connectionDB