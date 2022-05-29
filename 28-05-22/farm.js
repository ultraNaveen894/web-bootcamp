const mongoose=require('mongoose')
const Product = require('./product')
const {Schema}=mongoose

const farmSchema= new Schema({
    name:{
        type:String,
        required:[true,'name is required']
    },
    city:{
        type:String,
        
    },
    email:{
        type:String,
        required:[true,'name is required']
    },
    products:[{
        type:Schema.Types.ObjectId,
        ref:'Product'
    }]
    

})

farmSchema.post('findOneAndDelete',async(farm)=>{
    console.log('ok')
    if(farm.products.length){
        await Product.deleteMany({_id:{$in:farm.products}})
    }
})

const Farm=mongoose.model('Farm',farmSchema)

module.exports=Farm;