const Review=require('../models/review');
const campground=require('../models/compground');

module.exports.newReview=async(req,res)=>{
    const campgrounds=await campground.findById(req.params.id)
    const review=new Review(req.body)
    review.user=req.user
    campgrounds.reviews.push(review)
    await review.save();
    await campgrounds.save();
    req.flash('success','created new review')
    res.redirect(`/campgrounds/${campgrounds._id}`)
}
module.exports.delete=async(req,res)=>{
    const {id,reviewId}=req.params
await campground.findByIdAndUpdate(id,{$pull:{review:reviewId}})
await Review.findByIdAndDelete(reviewId)
req.flash('success','successfully deleted')
res.redirect(`/campgrounds/${id}`)
}