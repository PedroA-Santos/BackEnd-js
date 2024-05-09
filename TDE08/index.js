const express = require("express")
const server = express()
server.use(express.json())
const {router} = require("./routes/tasks")

const port = 4040
server.listen(port)


console.log(`servidor rodando na porta: ${port}`)


server.get("/",(req,res)=>{
    res.json("Bem vindo a minha API :)")
})

server.use("/", router)