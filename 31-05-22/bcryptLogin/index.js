const express=require("express")
const bcrypt=require('bcrypt')
const app=express();
const details=require('./models/schema')
const mongoose=require('mongoose')
const session=require('express-session');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/loginDemo');
    console.log('connected')
}

app.set('view engine','ejs')
app.set('views','views')
app.use(express.urlencoded({extended:true}))
app.use(session({secret:'notasecrete'}))


app.get('/',(req,res)=>{
    res.send('home page')
})
const validate=(req,res,next)=>{
    if(!req.session.verify_id){
         res.redirect('/login')
    }
    next();
}
app.get('/secret',validate,(req,res)=>{
        res.send('yyyyy')
})
// app.get('/secret',(req,res)=>{
//     if(!req.session.verify_id){
//         res.redirect('/login')
//     }else{
//         res.send('yyyyy')
//     }
// })

app.get('/register',(req,res)=>{
    res.render('regester')
})
app.get('/logout',(req,res)=>{
    res.render('logout')
})
app.get('/login',(req,res)=>{
    res.render('login')
})
app.post('/login',async(req,res)=>{
    const {name,password}=req.body
    let hash=await details.findUser(name,password)
    if(hash){
        req.session.verify_id=verify._id
        res.redirect('/secret')
    }else{
        res.redirect('/login')
        console.log('first')
    }
})
app.post('/logout',validate,(req,res)=>{
    // req.session.verify_id=null
    // req.session.destroy();
    res.redirect('/login')
})
app.post('/register',async(req,res)=>{
    const {name,password}=req.body
    const detail=new details({name,password})
    await detail.save()
    res.redirect('/login')
})
app.get('/new',validate,(req,res)=>{
    res.send('heyy')
})
app.listen(3000,()=>{
console.log('listening')
})