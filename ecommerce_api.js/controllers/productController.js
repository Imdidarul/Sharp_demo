const productServices = require("../services/productService")


const getAllProducts = productServices.getAllProducts

const addProduct = productServices.addProduct

const getProductById = productServices.getProductById

module.exports = {
    getAllProducts,
    addProduct,
    getProductById
}