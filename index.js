require("dotenv").config()
var express = require("express")
var connectToDatabase = require("./database/db")
var cors = require("cors")

var bookRoute = require("./routes/book-route")

var productRoute = require("./routes/product-route")




var app = express()

// connect to the data base

connectToDatabase()

// add the middle ware

app.use(express.json())
app.use(cors())


app.use("/api/books",bookRoute)

app.use("/api/products",productRoute)





// api/books/get

var PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log("The server is running");
})