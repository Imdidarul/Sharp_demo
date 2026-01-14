const express = require("express")
const router = express.Router()

router.get("/",(req,res)=>{
    res.send(`<h1>Welcome to the student and course portal API!`)
})


module.exports = router