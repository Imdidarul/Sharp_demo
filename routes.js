const fs = require("fs")

const requestHandler = (req,res)=>{
    if(req.url=='/' && req.method ==='GET'){
        fs.readFile('message.txt',(err,data)=>{
            const message = data ? data.toString() : ''
        res.setHeader("Content-Type","Text/html")
        res.end(
            `
            <h2>${message}</h2>
            <form action ="/message" method="POST">
            <label>Name:</label>
            <input type="text" name="username">
            <button type="submit">Add</button>
            </form>
            `
        )
    })
    }else{
        if(req.url=="/message" && req.method==='POST'){
            res.setHeader('Content-Type','text/html')

            let datachunks = []
            req.on('data',(chunks)=>{
                // console.log(chunks)
                datachunks.push(chunks)
            })
            req.on('end',()=>{
                let buffer = Buffer.concat(datachunks)

                let formData = buffer.toString()
                const formValues = formData.split('=')[1]

                fs.writeFile('message.txt', formValues, (err)=>{
                    res.statusCode=302
                    res.setHeader('Location','/')
                    res.end()
                })
                
            })
        }
    }
}

module.exports = requestHandler