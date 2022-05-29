let express=require('express')
const app=express();
const path=require('path')
const data =require('./data.json')
var methodOverride = require('method-override')
const bodyParser = require('body-parser')
const { v4: uuidv4 } = require('uuid');
app.use(bodyParser.json())
app.use(methodOverride('_method'))
// app.set('view engin','ejs')

app.use(express.static('public/bootstrap'))
app.use(bodyParser.urlencoded({ extended: true }))
//for running ouside the folder
// app.use(express.static(path.join(__dirname,'public')))
app.set('views',path.join(__dirname,'/views'))

// app.get('/cats',(req,res)=>{
//     // let num= Math.floor(Math.random()*10)
//     // res.render('home.ejs',{rand:num})

//     let cats=['cat1','cat2','cat3']
//     res.render('cats.ejs',{cats})
// })
// app.get('/r/:name',(req,res)=>{
//     const {name}=req.params
//     // res.render('home.ejs',{rand:num})
//     res.render('home.ejs',{name})
// })
// app.get('/news/:category',(req,res)=>{
//     let {category}=req.params
//     let article=data.articles[0]
//     res.render('news.ejs',{title:article,cat:category})

// })
// app.get('/user',(req,res)=>{

    // res.render('get.ejs',{name,age})
//     res.send('this is get req')
//     console.log(name,age)
// })
// app.post('/ppp',(req,res)=>{
//     const {na,i}=req.body
//     console.log(na,i)
//     res.send('this is an post request and we are getting data')
// })


let comments=[{name:'naveen',age:22,id:uuidv4()},{name:'raghu',age:23,id:uuidv4()},{name:'shetty',age:22,id:uuidv4()}]

app.get('/comments',(req,res)=>{
    res.render('comments/comments.ejs',{comments})
})
// app.get('/comments/:id',(req,res)=>{
// const {id}=req.params
// console.log(id)
// console.log('first')
// })
// app.get('/comments/show',(req,res)=>{

// })

app.get('/comments/new',(req,res)=>{
    res.render('comments/new_comments.ejs')
})
// app.post('/comments',(req,res)=>{
//     // console.log(req.body)
//     let {name,age}=req.body
//     comments.push({name,age,id:uuidv4()})
//     res.redirect('/comments')
// })
// app.get('/comments/:id',(req,res)=>{
//     let {id}=req.params
//     console.log(id)
//    const ide= comments.find(c=>c.id!==id)
//    console.log(ide)
//    res.render('comments/find.ejs',{ide})
// })
app.get('/comments/:id/edit',(req,res)=>{
    let {id}=req.params
    res.render('comments/edit.ejs',{id})
})
// app.patch('/comments/:id',(req,res)=>{
//     const{id}=req.body
//     let old_id=comments.find(e=>e.id==id)
//     console.log(id)
//     // console.log(old_id)
//     // console.log(comments)
//     // old_id.id=new_id;
//     res.redirect('/comments')
// })
app.delete('/comments/:id',(req,res)=>{
    const{id}=req.params
    comments=comments.filter(e=>e.id!==id)
    res.redirect('/comments')
})

app.listen(3000,()=>{
    console.log("listening in port 3000")
})
