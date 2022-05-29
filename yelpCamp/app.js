const express=require('express')
const app=express();
const path=require('path')
const mongoose = require('mongoose');
const ejsMate=require('ejs-mate')
const methodOverride=require('method-override')
const campground=require('./models/compground');
const Review=require('./models/review');
const catchAsync=require('./utils/catchAsync')
const ExpressErrors=require('./utils/expressErrors')
const {campgroundSchema,reviewSchema}=require('./utils/joierror');
const review = require('./models/review');
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/yelp-camp');
//   useNewUrlParser:true,
//   useCreateIndex:true,
//   udeUnifiedTopology:true
console.log('connected')
}

const validate=(req,res,next)=>{
const result=campgroundSchema.validate(req.body)
if(result.error){
    throw new ExpressErrors(result.error,404);
}else{
    next()
}
}
const validateReview=(req,res,next)=>{
const result=reviewSchema.validate(req.body)
if(result.error){
    throw new ExpressErrors(result.error,404);
}else{
    next()
}
}

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
app.engine('ejs',ejsMate)
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))

app.get('/',(req,res)=>{
    res.render('home')
})
app.get('/campgrounds',catchAsync(async(req,res)=>{
    const campgrounds=await campground.find();
    res.render('campgrounds/index',{campgrounds})
}))
app.get('/campgrounds/new',(req,res)=>{
    res.render('campgrounds/new')
})

app.post('/campgrounds',validate, catchAsync( async(req,res,next)=>{

        const campgrounds=new campground(req.body)
       await campgrounds.save();
       res.redirect(`/campgrounds/${campgrounds._id}`)
    
}))
app.get('/campgrounds/:id',catchAsync(async(req,res)=>{
        const {id}=req.params
        const campgrounds=await campground.findById(id).populate('reviews')
        res.render('campgrounds/show',{campgrounds})
}))

app.get('/campgrounds/:id/edit',catchAsync(async(req,res,next)=>{
    try{ 
        const campgrounds=await campground.findById(req.params.id)
     res.render('campgrounds/edit',{campgrounds}) 
    }catch(e){
        next(e)
    }

}))
app.delete('/campgrounds/:id',catchAsync(async(req,res)=>{
    const {id}=req.params
    await campground.findByIdAndDelete(id);
    res.redirect('/campgrounds')
    
}))
app.put('/campgrounds/:id',validate, catchAsync(async(req,res)=>{
const {id}=req.params
const campgrounds=await campground.findByIdAndUpdate(req.params.id,req.body)
res.redirect(`/campgrounds/${campgrounds._id}`)
}))

app.post('/campgrounds/:id/review',validateReview, catchAsync(async(req,res)=>{
    const campgrounds=await campground.findById(req.params.id)
    const review=new Review(req.body)
    campgrounds.reviews.push(review)
    await review.save();
    await campgrounds.save();
    res.redirect(`/campgrounds/${campgrounds._id}`)
}))

app.delete('/campgrounds/:id/delete/:reviewId',catchAsync(async(req,res)=>{
    const {id,reviewId}=req.params
await campground.findByIdAndUpdate(id,{$pull:{review:reviewId}})
await Review.findByIdAndDelete(reviewId)
res.redirect(`/campgrounds/${id}`)
}))

// app.all('*',(req,res,next)=>{
//     next(new ExpressErrors(req.error.details,400))
// })

app.use((err,req,res,next)=>{
    const{statusCode=500}=err;
    if(!err) message='page not found'
    res.status(statusCode).render('partials/error',{ err })
})

app.listen(3000,()=>{
    console.log('listening')
})