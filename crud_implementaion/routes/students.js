const express = require('express');
const { route } = require('./home');
const router = express.Router()

const students = [

    { id: 1, name: "Alice" },
    
    { id: 2, name: "Bob" },
    
    { id: 3, name: "Charlie" }
    
    ];

router.get("/",(req,res)=>{
    let allStudents = []
    for (let i=0; i<students.length; i++){
        allStudents.push(students[i].name)
    }
    res.send(`Students: ${allStudents}`)
})

router.get("/:id",(req,res)=>{
    const id = req.params.id
    let student = null
    for(let i = 0; i<students.length;i++){
        if(students[i].id == id){
            student = students[i].name
        }
    }
    if (student){
        res.send(`Student: ${student}`)
    }else{res.send("Student not found")}
})

module.exports = router