const express = require("express")
const app = express()
let port = 3000
const userRoutes = require('./routes/user_routes')
const orderRoutes = require('./routes/order_routes')

app.use((req,res,next)=>{
    console.log(`${req.method} request to ${req.url}`)
    next()
})

app.use("/users",userRoutes)
app.use("/orders",orderRoutes)

app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})