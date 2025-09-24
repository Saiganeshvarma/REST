var mongoose = require("mongoose")


var bookSchema = new mongoose.Schema({
    title : String,
    price : Number,
    author : String,
    isActive : Boolean

})

module.exports = mongoose.model("books",bookSchema)