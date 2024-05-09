const { json } = require('body-parser');
const express = require('express');
const router= express.Router();
const {prisma} = require ("../db/prisma")





router.get("/tasks",async(req,res)=>{
    
    const tasks = await prisma.tasks.findMany({
        where:{
            id:req.query.id?Number(req.query.id):undefined
        }
    }) 
    res.json(tasks)
})

router.get("/tasks/:id",async(req,res)=>{
    const id = Number(req.params.id)
    const tasks = await prisma.tasks.findFirst({
        where:{
            id
        }
    })

    if(!tasks) return res.status(404).json({message: `Movie With id ${id} not found `})
    res.json(tasks)
})


router.post("/tasks",async(req,res)=>{
    const {name,description}= req.body
    const newtask = await prisma.tasks.create( {
        data: {
            name,
            description,
            isDone:false
        }
    })

   
    res.status(201).json(newtask)

})


router.put("/tasks/:id", async(req,res)=>{
    const id = Number(req.params.id)
    console.log(id);
    const {name, description, isDone} = req.body;
    const tasks = await prisma.tasks.update({
        where: {
            id
        },
        data:{
            name,
            description,
            isDone
        },
        
    })
   
    return res.status(200).json({message:`Task was Update`,status:200,tasks})
    



})


router.delete("/tasks/:id",async(req,res)=>{
    const id = Number(req.params.id);
    await prisma.tasks.delete({
        where:{
            id
        }
    })

   

    return res.status(200).json({message:`task ${id} was deleted with sucess`, status:200})


})





module.exports = {
    router
}