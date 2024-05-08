const { json } = require('body-parser');
const express = require('express');
const router= express.Router();

let tasks = [{
        

    "id": 1,
    "name": "Comprar leite",
    "description": "Ir no mercado da esquina e comprar leite",
    "isDone": false

    },

    {
        "id": 2,
        "name": "Arrumar a cama",
        "description": "Assim que acordar levantar e arrumar a cama",
        "isDone":true
    },

    {
        "id":3,
        "name":"fazer terafa",
        "description":"concluir minhas tarefas diárias faculdade",
        "isDone":false
    }

]

router.get("/tasks",(req,res)=>{
    
    res.json(tasks)
})


router.post("/tasks",(req,res)=>{
    const {name,description}= req.body
    const newtask = {
        id:tasks.length+1,
        name,
        description,
        isDone:false
    }

    tasks.push(newtask)
    res.status(201).json(tasks)

})


router.put("/tasks/:id",(req,res)=>{
    const id = Number(req.params.id)
    const {name,description,isDone} = req.body;
    const newtask = tasks.find((Object)=>Object.id ===id);

    if(!newtask) return res.status(400).json({message: `Task ${id} are not created`,status:400})


    newtask.name = name;
    newtask.description = description;
    newtask.isDone = isDone;

    return res.status(200).json({message:`Task was Update`,status:200,tasks})



})


router.delete("/tasks/:id",(req,res)=>{
    const id = Number(req.params.id);
    if(!id) return res.status(400).json({message:`ID ${id} informed is not valid`,status:400})
    const newtask = tasks.find((Object)=>Object.id ===id);
    if(!tasks) return res.status(400).json({message:`task ${id} are not created`,status:400});
    tasks = tasks.filter((Object)=>Object.id===id);

    return res.status(200).json({message:`task ${id} was deleted with sucess`, status:200})

    
})





module.exports = {
    router
}