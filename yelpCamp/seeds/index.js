
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
    for(let i=0;i<300;i++){
        let random1000=Math.floor(Math.random()*1000)
        let price=Math.floor(Math.random()*30)
        const camp=new compground({
            location:`${cities[random1000].city}, ${cities[random1000].state}`,
            title:`${sample(descriptors)} ${sample(places)}`,
            geometry : { type: "Point", coordinates : [ cities[random1000].longitude, cities[random1000].latitude ] },
            image:[
              {
                url: 'https://res.cloudinary.com/appinessworld1/image/upload/v1654967067/YelpCamp/DSC_0164-01_slhmai.jpg',
                filename: 'YelpCamp/gypopcerm9oeykqh0e15',
              },
              {
                url: 'https://res.cloudinary.com/appinessworld1/image/upload/v1654967067/YelpCamp/DSC_0164-01_slhmai.jpg',
                filename: 'YelpCamp/gypopcerm9oeykqh0e15',
              },
              {
                url: 'https://res.cloudinary.com/appinessworld1/image/upload/v1654967067/YelpCamp/DSC_0164-01_slhmai.jpg',
                filename: 'YelpCamp/gypopcerm9oeykqh0e15',
              },
              ],
            price:price,
            description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur natus dolore distinctio! Atque itaque nemo impedit a alias aperiam natus accusantium minus soluta cumque, dolores harum quaerat accusamus? Sint, veniam.',
            auther:"629987d27e90281b77322fc9"
        })
        await camp.save();
    }
}
seedDB();