const mongoose = require('mongoose');
const review = require('./review');
const Schema=mongoose.Schema;
const optn={ toJSON: { virtuals: true } }

const imageSchema=new Schema(
    {
        url:String,
        filename:String
    }
)
imageSchema.virtual('thumbnail').get(function(){
   return this.url.replace('/upload','/upload/w_200')
})

const campgroundSchema=new Schema({
    title:String,
    price:Number,
    images:[imageSchema],
    description:String,
    location:String,
        geometry: {
          type: {
            type: String, 
            enum: ['Point'], 
            default:'Point'
          },
          coordinates: {
            type: [Number],
            required: true
          }
        },
    reviews:[{
        type:Schema.Types.ObjectId,
        ref:'Review'
    }],
    auther:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
},optn)

campgroundSchema.virtual('properties.popupMarkup').get(function(){
    return `<a href='/campgrounds/${this._id}'>${this.title}</a>`;
})

campgroundSchema.post('findOneAndDelete',async function(docs){
    await review.deleteMany({_id:{$in:docs.reviews}})
})

module.exports=mongoose.model('Campground',campgroundSchema)