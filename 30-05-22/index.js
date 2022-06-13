
const express=require('express')
const app=express();
const campRoutes=require('./routes/campRoutes')
const admin=require('./routes/admin')
const count=require('./routes/cookieParser')
const flash=require('connect-flash')

app.use('/camp',campRoutes)
app.use('/admin',admin)
app.use('/count',count)

const session=require('express-session')
const options={ secret: 'keyboard cat',resave:false,saveUninitialized:false}
app.use(session(options))
app.use(flash())
app.get('/viewcount',(req,res)=>{
    if(req.session.view){
        req.session.view+=1
    }
    else{
        req.session.view=1
    }
    res.send(`the no of counts you made are ${req.session.view} `)
})
app.get('/regester',(req,res)=>{
    const {userName='anonymus'}=req.query
    req.session.userName=userName
    req.flash('sucess','yes we made it')
    res.redirect('/greet')
})
app.get('/greet',(req,res)=>{
    const {userName}=req.session
    // res.send(`welcome back ${userName}`)
    res.send(req.flash('sucess'))
})
app.listen(3000,()=>{
    console.log('listening')
})

