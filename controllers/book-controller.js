
var book = require("../model/books")
var getAllBooks = async(req,res)=>{
    var allBooks = await book.find()
    res.status(200).json(allBooks)

}

var getSingleBook = async(req,res)=>{

}

var addNewBook = async(req,res)=>{

    var newFormBook = req.body

    var newBook = await book.create(newFormBook)
    if(newBook){
        res.status(201).json(newBook)
    }

}

var updateBook = async(req,res)=>{

}

var deleteBook = async(req,res)=>{

}


module.exports = {
    getAllBooks,getSingleBook,addNewBook,updateBook,deleteBook
}

