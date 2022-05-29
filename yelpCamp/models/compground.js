const mongoose = require('mongoose');
const review = require('./review');
const Schema=mongoose.Schema;

const campgroundSchema=new Schema({
    title:String,
    price:Number,
    image:String,
    description:String,
    location:String,
    reviews:[{
        type:Schema.Types.ObjectId,
        ref:'Review'
    }]
})

campgroundSchema.post('findOneAndDelete',async function(docs){
    await review.deleteMany({_id:{$in:docs.reviews}})
})

module.exports=mongoose.model('Campground',campgroundSchema)