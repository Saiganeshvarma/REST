
var books = require("../model/books")

var getAllBooks = async(req,res)=>{
    var allBooks = await  books.find()
    res.status(200).json(allBooks)




}

var getSingleBook = async(req,res)=>{
    var bookId = req.params.id 
    var myBook = books.findById(bookId)
    res.status(200).json(myBook)

}

var addBook = async(req,res)=>{
    var formData = req.body
    var newBook = await books.create(formData)
    if(newBook){
        res.status(201).json(newBook)
    }else{
        res.status(404).json({message : "cannot create a book"})
    }

}

var updateBook = async(req,res)=>{

}

var deleteBook = async(req,res)=>{

}

module.exports = {getAllBooks,getSingleBook,addBook,updateBook,deleteBook}