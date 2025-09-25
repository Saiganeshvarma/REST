var express = require("express")

var {getAllBooks,getSingleBook,addBook,updateBook,deleteBook} = require("../controllers/book-controller")


var router = express.Router()

router.get("/get",getAllBooks)

router.get("/get/:id",getSingleBook)

router.post("/add",addBook)

router.put("/add/:id",updateBook)

router.delete("/delete/:id",deleteBook)


module.exports = router