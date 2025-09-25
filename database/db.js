var mongoose = require("mongoose")


async function connectToDataBase(){
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("connected to the database");
    }catch(error){
        console.log("error",error);
    }
}

module.exports = connectToDataBase