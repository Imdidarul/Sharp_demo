const path = require("path")

const getAllProducts = (req,res)=>{
    res.sendFile(path.join(__dirname,"..","view","getProduct.html"))
}

const addProduct = (req,res)=>{
    const data = req.body
    console.log(`Added ${data.productName}`)
    res.json({value:data.productName})
}

const getProductById = (req,res)=>{
    const id = req.params.id
    res.send(`Fetching product with ID: ${id}`)
}

module.exports = {
    getAllProducts,
    addProduct,
    getProductById
}