const express = require("express")
const router = express.Router()

const courses = [

    { id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },
    
    { id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }
    
    ];

router.get("/",(req,res)=>{
    let allCourse = []

    for (let i = 0; i<courses.length;i++){
        allCourse.push(courses[i].name)
    }
    if(allCourse){
        res.send(`Courses: ${allCourse}`)
    }
})

router.get("/:id",(req,res)=>{
    const id = req.params.id
    for (let i=0; i<courses.length; i++){
        if(courses[i].id==id){
            return res.send(`Course: ${courses[i].name}, Description: ${courses[i].description}`)
        }
    }
    res.send("Course not found")
})

module.exports = router