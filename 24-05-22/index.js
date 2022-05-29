const express=require('express')
const app=express();
const morgan=require('morgan')

// app.use(morgan('tiny'))

// let checkPass=function(req,res,next){
//     // console.log('iam the first')
//     // req.requestTime=Date.now();
//     let {pass}=req.query
//     if(pass=='naveen'){

//         next();
//     }
//     else{
//         res.send('wrong password')
//     }
//     // console.log('iam the first after calling')
// }
// app.use((req,res,next)=>{
//     // console.log('iam the first')
//     // req.requestTime=Date.now();
//     let {pass}=req.query
//     if(pass=='naveen'){

//         next();
//     }
//     else{
//         res.send('wrong password')
//     }
//     // console.log('iam the first after calling')
// })
// app.use((req,res,next)=>{
//     console.log('iam the second')
//     next();
//     console.log('iam the second after calling')
// })


app.use((err,req,res,next)=>{
    //    res.status(400).send('not found')
    console.log('***********error********')
    console.log(err)
    })

app.get('/dogs',(req,res,next)=>{
    res.send('yeyy dogssss')
    next()
})
// app.get('/secrate',checkPass,(req,res)=>{
//     res.send('yeyy matched')
// })




app.listen(3000,()=>{
    console.log('listening')
})