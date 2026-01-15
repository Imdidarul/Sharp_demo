const path = require("path")
const {sendErrorResponse,sendResponse} = require("../utils/response")


const getAllUsers = (req,res)=>{
    res.sendFile(path.join(__dirname,"..","view","getUser.html"))
}

const addUser = (req,res)=>{
    res.send( "Adding a new user")
}


const getUserById = (req,res)=>{
    const id = Number(req.params.id)
    if(id>99){
        return sendErrorResponse(res, {message:'User not found', statusCode:404})
    }

    // res.send(`Fetching user with ID: ${id}`)
    return sendResponse(res,{message:`Fetching user with ID: ${id}`},200)
}

module.exports = {
    getAllUsers,
    addUser,
    getUserById
}