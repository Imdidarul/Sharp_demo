const express = require("express")
const app = express()
const bookRoutes = require("./routes/book")
let port = 3000

app.use("/books",bookRoutes)

app.get("/",(req,res)=>{
    res.send("Go to /books")
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})