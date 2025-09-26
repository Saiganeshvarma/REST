
var Books = require("../models/books")


var getAllBooks = async(req,res)=>{

    var allBooks = await Books.find()
    res.status(200).json(allBooks)


}

var getSingleBook = async(req,res)=>{
    var BookId = req.params.id 
    var singleBook = await Books.findById(BookId)
    res.status(200).json(singleBook)




}

var addBook = async(req,res)=>{

    var formData = req.body
    var newBook = await Books.create(formData)
    if(newBook){
        res.status(201).json(newBook)
    }else{
        res.status(404).json({message : "cannot create book"})
    }



}

var updateBook = async(req,res)=>{
    var bookId = req.params.id 
    var updatedData = req.body
    var updatedBook = await Books.findByIdAndUpdate(bookId,updatedData)
    if(updatedBook){
        res.status(200).json(updatedBook)
    }else{
        res.status(404).json({message : "cannot update"})
    }


}

var deleteBook = async(req,res)=>{
    var bookId = req.params.id 
    var deletedBook = await Books.findByIdAndDelete(bookId)
    if(deletedBook){
        res.status(200).json(deletedBook)
    }else{
        res.status(404).json({message : "cannot delete"})
    }


}

module.exports = {
    getAllBooks,getSingleBook,addBook,updateBook,deleteBook
}