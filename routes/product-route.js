var express = require("express")

var {getAllproducts,getSingleProduct,addNewProduct,updateNewProduct,deleteProduct} = require("../controllers/product-controller")

var router = express.Router()

router.get("/get",getAllproducts)

router.get("/get/:id",getSingleProduct)

router.post("/add",addNewProduct)

router.put("/update/:id",updateNewProduct)


router.delete("/delete/:id",deleteProduct)

module.exports = router