const express = require("express")
const server = express()
const {router} = require("./routes/tasks")
server.use(express.json())

const port = 4040
server.listen(port)


console.log(`servidor rodando na porta: ${port}`)


server.get("/",(req,res)=>{
    res.json("Bem vindo a minha API :)")
})

server.use("/", router)