const mongoose=require('mongoose')
const Product = require('./products')
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/agriMart');
  console.log('connected to mongoose')
}

Product.insertMany([{name:'mango',price:20,category:'fruit'},
{name:'banana',price:30,category:'fruit'},
{name:'tommato',price:26,category:'vegetable'}
]).then(e=>console.log(e)).
catch(e=>console.log(e))