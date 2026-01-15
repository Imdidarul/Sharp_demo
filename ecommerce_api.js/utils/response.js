const { stat } = require("fs")

const sendErrorResponse = (res,err)=>{
    const statusCode = err.statusCode
    const message = err.message
    
    return res.status(statusCode).json({
        message:message,
        status:false
    })
}

const sendResponse = (res,data,statusCode)=>{
    return res.status(statusCode).json({
        data:data,
        status:true
    })
}

module.exports = {
    sendErrorResponse,
    sendResponse

}