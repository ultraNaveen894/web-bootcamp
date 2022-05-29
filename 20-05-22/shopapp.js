const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/shopApp');
  console.log('connected')
}

let shopSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        min:[0,'price must be an positive integer']
        // min:0
    },
    size:{
        type:String,
        enum:['s','m','l']
    }

});

shopSchema.methods.greetMe=function(){ //we can update here 
    console.log('hii baby')
    console.log(`hii ${this.name}`)
    this.price=1;
    this.save();
    console.log(this)
}

shopSchema.statics.get=  function (){
   return this.findOne({name:'ultraKitchen'})//this refers to Details
}

shopSchema.virtual('fullname').get(function(){
    console.log(`the name is ${this.name} ${this.price} `)
})

const Details=mongoose.model('Detail',shopSchema)




// const ultaKitchen=new Details({name:'ultraKitchen',price:224})
// ultaKitchen.save().
// then((e)=>{
//     console.log('working')
//     console.log(e)
// }).catch((error)=>{
//     console.log(error)
// })
// Details.findOneAndUpdate({name:'ultraKitchen'},{price:-50},{new:true,runValidators:true}).
// then((e)=>{
//     console.log('working')
//     console.log(e)
// }).catch((error)=>{
//     console.log(error)
// Details.findOneAndUpdate({name:'ultraKitchen'},{price:50,size:'xl'},{new:true,runValidators:true}).
// then((e)=>{
//     console.log('working')
//     console.log(e)
// }).catch((error)=>{
//     console.log(error)
// })
// Details.find().then(e=>console.log(e))
 
// let show=async()=>{
//     const dataKitchen=await Details.findOne({name:'ultraKitchen'})
//     dataKitchen.greetMe();
// }
// show();

// Details.get().then(e=>console.log(e))


let ultraLegends=new Details({name:'ultraLegends',price:50000000})
ultraLegends.fullname;