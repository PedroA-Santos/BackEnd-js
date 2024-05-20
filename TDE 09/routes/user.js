const express = require ("express")
const bcrypt = require("bcrypt")
const jwt = require ('jsonwebtoken')
const { prisma } = require("../db/prisma")
const { findUserByEmail } = require("../db/users")
const router = express.Router()

router.post("/register", async(req,res)=>{
    // buscando o email dentro do banco de dados
    const userAlreadExist =  await findUserByEmail(req.body.email)
 

    //se o email já existir, retorna que o usuário já existe
    if(userAlreadExist) return res.status(400).json({
        message : "user alread exist"
    })
    const passwordHash = bcrypt.hashSync(req.body.password,10)
    // se não cria o usuário
    const user = await prisma.users.create({
        data:{
            email:req.body.email,
            password:passwordHash,
            name:req.body.name
        }
    })
    delete user.password

    res.send(user)


})


router.post("/login",async(req,res)=>{

    const user = await findUserByEmail(req.body.email)
    if(!user) return res.status(401).json({message: "invalid credentials"})
      const isPasswordTheSame = bcrypt.compareSync(req.body.password, user.password)
    if (!isPasswordTheSame) return res.status(401).json({message: "invalid credentials"})
    
        const token = jwt.sign({id: user.id,email:user.email},process.env.SECRET)
    
        res.json({
        success: true,
        token
    })

})

module.exports = {router}