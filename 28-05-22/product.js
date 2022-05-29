const mongoose=require('mongoose')
const {Schema}=mongoose

const productSchema= new Schema({
    name:{
        type:String,
        required:[true,'name is required']
    },
    price:{
        type:Number,
        required:[true,'price required']
        
    },
    category:{
        type:String,
        required:[true,'name is required'],
        enum:['fruit','vegetable','dairy']
    },
    farm:{
        type:Schema.Types.ObjectId,
        ref:'Farm'
    }

})
const Product=mongoose.model('Product',productSchema)

module.exports=Product;