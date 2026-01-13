const express = require('express')
const app = express()
let port = 3000

app.get("/welcome/:username",(req,res)=>{
    const name = req.params.username
    const role = req.query.role
    res.send(`Welcome ${name}, your role is ${role}`)
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})