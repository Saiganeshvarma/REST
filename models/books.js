var moongoose = require("mongoose")

var bookSchema = new moongoose.Schema({
    title : String,
    price : Number,
    author : String,
    isActive : Boolean
})

module.exports = moongoose.model("books",bookSchema)
