const express=require('express')
const path=require('path')
const app=express();
const mongoose=require('mongoose')
const Product = require('./model/products')


app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/agriMart');
  console.log('connected to mongoose')
}


app.get('/products',async(req,res)=>{
   let products= await Product.find({})
   res.render('show',{products})
})
app.get('/products/new',(req,res)=>{
   res.render('new')
})
app.get('/products/:id',async(req,res)=>{
  const {id}=req.params
  let product=await Product.findById(id)
  console.log(product)
  res.render('details',{product})
})

app.post('/products',async(req,res)=>{
  console.log(req.body)
  let product=new Product(req.body)
  await product.save();
  res.redirect('/products')
})

app.listen(3000,()=>[
    console.log('app is listening')
])