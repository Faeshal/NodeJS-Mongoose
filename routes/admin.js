const express = require("express");

const adminController = require("../controller/admin");

const router = express.Router();

router.get("/add", adminController.getAddProduct);

router.get("/", adminController.getProducts);

router.post("/add", adminController.postAddProduct);

router.get("/edit/:productId", adminController.getEditProduct);

router.post("/edit", adminController.postEditProduct);

router.post("/delete", adminController.postDeleteProduct);

module.exports = router;
