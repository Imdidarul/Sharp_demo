const path = require("path")

const getAllUsers = (req,res)=>{
    res.sendFile(path.join(__dirname,"..","view","getUser.html"))
}

const addUser = (req,res)=>{
    res.send( "Adding a new user")
}


const getUserById = (req,res)=>{
    const id = req.params.id
    res.send(`Fetching user with ID: ${id}`)
}

module.exports = {
    getAllUsers,
    addUser,
    getUserById
}