
const mongoose = require('mongoose');
const cities=require('./cities')
const {places,descriptors}=require('./seedHelpers')
const compground = require('../models/compground');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/yelp-camp');
//   useNewUrlParser:true,
//   useCreateIndex:true,
//   udeUnifiedTopology:true
console.log('connected')
}

const sample=(array)=>array[Math.floor(Math.random()*array.length)]

const seedDB=async()=>{
    await compground.deleteMany({});
    for(let i=0;i<50;i++){
        let random1000=Math.floor(Math.random()*1000)
        let price=Math.floor(Math.random()*30)
        const camp=new compground({
            location:`${cities[random1000].city}, ${cities[random1000].state}`,
            title:`${sample(descriptors)} ${sample(places)}`,
            image:"https://source.unsplash.com/collection/483251",
            price:price,
            description:'this is an yelp camp'
        })
        await camp.save();
    }
}
seedDB();