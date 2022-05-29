const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/User');
  console.log('connected')
}

const userSchema=new mongoose.Schema({
    first:String,
    last:String,
    adress:[{
        street:String,
        city:String,
        state:String,
        country:String
    }]
})
const User=mongoose.model('User',userSchema);

const makeUser=async()=>{
    // await User.deleteMany({});
const u=new User({
    first:'naveen',
    last:'v',
})
u.adress.push({
    street:'banashankari',
    city:'bangalore',
    state:'karnataka',
    country:'india'
})
u.save();
}
let update=async(id)=>{
    const a=await User.findById(id);
    console.log(a)
    a.adress.push({
        street:'banashankari',
        city:'bangalore',
        state:'karnataka',
        country:'india'
    })
    await a.save();
}
makeUser();
update("62904f9880578b0b9cbbe450");