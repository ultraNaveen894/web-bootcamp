const express=require('express')
const app=express();
const path=require('path')
const mongoose = require('mongoose');
const Farm=require('./farm')
const Product=require('./product');
const methodOverride=require('method-override')


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/demoo1');
console.log('connected')
}

app.use(express.urlencoded({extended:true}))
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
app.use(methodOverride('_method'))


app.get("/farms",async (req,res)=>{
  let farms=await Farm.find({})
  res.render('index',{farms})
})

app.get('/farms/new',(req,res)=>{
  res.render('new')
})

app.get('/farms/:id',async(req,res)=>{
  const farm=await Farm.findById(req.params.id).populate('products')
  res.render('show',{farm})
})

app.get('/farms/:id/products/new',(req,res)=>{
  const {id}=req.params
  res.render('products/new',{id})
})

app.post('/farms/:id/products',async(req,res)=>{
  const {id}=req.params
  const product=new Product(req.body)
  const farms=await Farm.findById(id)
  console.log(product )
  console.log(farms)
 farms.products.push(product)
  product.farm=farms
  await product.save();
 await farms.save();
 res.redirect(`/farms/${id}`)
 })

 app.get('/farms/products/:pid',async(req,res)=>{
   const {fid,pid}=req.params
   const product=await Product.findById(pid)
   console.log(product)
   res.render('products/show',{product});

 })
app.delete('/farms/:id/delete',async(req,res)=>{
  await Farm.findOneAndDelete(req.params.id)
  console.log('done')
  res.redirect('/farms')
})
app.post('/farms',async(req,res)=>{
  const item=new Farm(req.body)
  item.save();
  res.redirect('/farms')
})

app.listen(3000,()=>{
  console.log('listening')
})