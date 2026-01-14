const getProducts = (req,res)=>{
    res.send( "Fetching all products")
}

const postProducts = (req,res)=>{
    res.send( "Adding a new product")
}

const getById = (req,res)=>{
    const id = req.params.id
    res.send(`Fetching product with ID: ${id}`)
}

module.exports = {
    getProducts,
    postProducts,
    getById
}