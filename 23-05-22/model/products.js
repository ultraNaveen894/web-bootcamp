const mongoose=require('mongoose')

const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true,
        enum:['fruit','vegetable']
    }
})

const Product = new mongoose.model('Product',productSchema)

module.exports=Product;