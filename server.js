require("dotenv").config()
var express = require("express")

var connectToDatabase = require("./database/db")

var router= require("./routes/book-routes")

var app = express()

//connect to the data base

connectToDatabase()

// add the middle ware

app.use(express.json())

app.use("/api/books",router)


var PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log("The server is running");
})



