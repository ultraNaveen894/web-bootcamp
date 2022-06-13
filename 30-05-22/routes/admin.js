const express=require('express')
const router=express.Router()

router.use((req,res,next)=>{
    if(req.query.isAdmin){
        next()
    }
    else{
        res.send('not an admin')
    }
})

router.get('/edit',(req,res)=>{
    res.send('hey')
})
module.exports=router