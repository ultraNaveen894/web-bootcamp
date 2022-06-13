if(process.env.NODE_ENV!=='production'){
    require('dotenv').config()
}
const express=require('express')
const app=express();
const path=require('path')
const mongoose = require('mongoose');
const ejsMate=require('ejs-mate')
const ExpressErrors=require('./utils/expressErrors')
const methodOverride=require('method-override')
const campgroundsRouter=require('./routes/campgrounds')
const reviewRouter=require('./routes/review')
const userRouter=require('./routes/user')
const session=require('express-session')
const flash=require('connect-flash')
const User=require('./models/user')
const passport=require('passport')
const passportLocal=require('passport-local')
const MongoStore = require('connect-mongo');

const database=process.env.CONNECT_ATLAS||'mongodb://localhost:27017/yelp-camp'

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(database);
    console.log('connected')
}
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
app.engine('ejs',ejsMate)
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname,'public')))

const secret=process.env.SECRET||'thisshouldbeabettersecreate'
const sessionConfig={
    name:'yelpCamp',
    store:MongoStore.create({
       mongoUrl:database,
        secret:secret,
        touchAfter:24*60*60,
    }),
     secret:secret,
    resave:false,
    saveUninitialized:true,
    cookie:{
        httpOnly:true,
        expires:Date.now()+100*3600*24*7,
        maxAge:100*3600*24*7
    }
}
app.use(session(sessionConfig))
app.use(flash())

app.use(passport.initialize())
app.use(passport.session())
passport.use(new passportLocal(User.authenticate()))

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use((req,res,next)=>{
    if(!['/','/login','/undefined'].includes(req.originalUrl)){
        req.session.returnTo=req.originalUrl;
        }
    res.locals.userName=req.user
    res.locals.success=req.flash('success')
    res.locals.error=req.flash('error')
    next();
})

app.use('/',userRouter)
app.use('/campgrounds',campgroundsRouter)
app.use('/campgrounds/:id',reviewRouter)

app.get('/',(req,res)=>{
    res.render('campgrounds/home')
})

app.get('/fake',async(req,res)=>{
    let user=new User({email:'naveen@gmail.com',username:'naveen'})
    let reg= await User.register(user,'navsan')
    res.send(reg)
})

app.all('*',(req,res,next)=>{
    next(new ExpressErrors('pageNotFound',400))
})

app.use((err,req,res,next)=>{
    const{statusCode=500}=err;
    res.status(statusCode).render('partials/error',{ err })
})

const port=process.env.port||3000
app.listen(3000,()=>{
    console.log(`listening on ${port}`)
})
