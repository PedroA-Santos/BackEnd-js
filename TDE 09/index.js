const express = require("express")
const server = express()
server.use(express.json())
const {router:tasksRouter} = require("./routes/tasks")
const {router:userRouter} = require ("./routes/user")

const port = 4040

console.log(`servidor rodando na porta: ${port}`)


server.get("/",(req,res)=>{
    res.json("Bem vindo a minha API :)")
})

server.use("/api", tasksRouter)
server.use("/api", userRouter)

server.use ((req,res,next)=>{
    console.log(req.url);
    console.log(req.method);
    console.log(req.req.body);
    next();
    
})

server.listen(port)