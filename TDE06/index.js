const express = require ("express")
const server = express()


const port = 5000

server.listen (port)

server.get ("/healt",(req,res)=>{

    res.json({"status": "runing"})
})