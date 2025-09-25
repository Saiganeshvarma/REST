require("dotenv").config()
var express = require("express")

var bookRoute = require("./routes/book-routes")

var connectToDataBase = require("./database/db")

var app = express()

// connect to the data base

connectToDataBase()

// add the middle ware

app.use(express.json())

app.use("/api/books",bookRoute)



var PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log("The server is running");
})

