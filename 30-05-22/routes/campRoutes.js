const express=require('express')
const router=express.Router();
const cookieParser=require('cookie-parser')

router.use(cookieParser('secrateSignedCookie'))
router.get('/',(req,res)=>{
    res.cookie('name','naveen')
    res.cookie('animal','beast')
res.send('welcome to home page')
})

router.get('/edit',(req,res)=>{
const {name,animal}=req.cookies
res.send(`welcome mr ${animal}`)
})

router.get('/new',(req,res)=>{
    res.cookie('bird','peacock',{signed:true})
res.send('welcome to new page')
})
router.get('/something',(req,res)=>{
res.send(req.cookies)
})

module.exports=router;