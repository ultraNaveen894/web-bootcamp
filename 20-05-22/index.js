const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/students');
  console.log('connected')
}

let studentsSchema=new mongoose.Schema({
    name:  String, // String is shorthand for {type: String}
    age: Number,
    job:   String,
})

const NewDetail = mongoose.model('NewDetail', studentsSchema)
// const navee=new NewDetail({name:'naveen',age:22,job:'developer'})

// NewDetail.insertMany([{name:'raghu',age:23,job:'postman'},{name:'shetty',age:22,job:'student'},{name:'ninga',age:21,job:'student'}]).then
// ((e)=>{
//   console.log('working')
// console.log(e)
// })

// NewDetail.find({name:'raghu'}).then((e)=>console.log(e))

// NewDetail.updateMany({name:'raghu'},{job:'daksevak'}).then(e=>console.log(e))

// NewDetail.deleteOne({name:'shetty'})
NewDetail.deleteOne({name:'shetty'}).then(e=>console.log(e))
// NewDetail.updateOne({name:'shetty'},{age:21})

