const mongoose = require('mongoose');
const {Schema}=mongoose;

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/User');
  console.log('connected')
}

const productSchema=new Schema({
    name:String,
    price:String,
    season:{
        type:String,
        enum:['summer','winter','rainy']
    }
})
const formschema=new Schema({
    name:String,
    city:String,
    products:[{type:mongoose.Schema.Types.ObjectId,ref:'Product'}]
})

const Product=mongoose.model('Product',productSchema);
const Form=mongoose.model('Form',formschema);

// Product.insertMany([
//     {name:'mango',price:10,season:'summer'},
//     {name:'black berry',price:12,season:'rainy'},
//     {name:'apple',price:90,season:'winter'},
// ])


// const makeFarm=async()=>{
//     const form=new Form({name:'naveen form',city:'chikkaballapur'})
//     const melon=await Product.findOne({name:'mango'})
//     form.products.push(melon);
//     await form.save();
//     console.log(form)
// }
// makeFarm();

const add=async()=>{
    const form=await Form.findOne({name:'naveen form'});
    const watermelon=await Product.findOne({name:'apple'})
    form.products.push(watermelon);
    form.save();
}
// add();

Form.findOne({name:'naveen form'}).populate('products').
then(e=>console.log(e))