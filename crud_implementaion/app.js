const express = require("express")
const app = express()
let port = 3000
const homeRoute = require("./routes/home")
const studentRoute = require("./routes/students")
const courseRoute = require("./routes/course")

app.use("/",homeRoute)

app.use("/students",studentRoute)

app.use("/course",courseRoute)

app.use((req,res)=>{
    res.status(404).send("<h1>404-Page not found</h1>")
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})