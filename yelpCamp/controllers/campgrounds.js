const campground=require('../models/compground');
const {cloudinary}=require('../cloudinary')
const mbxgeocoding=require('@mapbox/mapbox-sdk/services/geocoding')
const mapboxtoken=process.env.MAP_BOX_TOKEN
const geocoder=mbxgeocoding({accessToken:mapboxtoken})

module.exports.camps=async(req,res)=>{
    const campgrounds=await campground.find();
    res.render('campgrounds/index',{campgrounds})
}
module.exports.newForm=(req,res)=>{
    res.render('campgrounds/new')
}

module.exports.new=async(req,res,next)=>{
    
    const geoData=await geocoder.forwardGeocode({
        query:req.body.location,
        limit:1
    }).send()
    const campgrounds=new campground(req.body)
    campgrounds.images=req.files.map(f=>({url:f.path,filename:f.filename}))
    campgrounds.auther=req.user
    campgrounds.geometry=geoData.body.features[0].geometry
   await campgrounds.save();
   req.flash('success','successfully ceated new camp')
   res.redirect(`/campgrounds/${campgrounds._id}`)
}
module.exports.show=async(req,res)=>{
    const {id}=req.params
    const campgrounds=await campground.findById(id).populate({path:'reviews',
    populate:{path:'user'}}).populate('auther')
    if(!campgrounds){
        req.flash('error','cannot find a campground')
       return res.redirect("/campgrounds")
    }
    res.render('campgrounds/show',{campgrounds})
}

module.exports.editForm=async(req,res,next)=>{
    try{ 
        const campgrounds=await campground.findById(req.params.id)
        if(!campgrounds){
            req.flash('error','cannot find a campground')
           return res.redirect("/campgrounds")
        }
     res.render('campgrounds/edit',{campgrounds}) 
    }catch(e){
        next(e)
    }
}
module.exports.delete=async(req,res)=>{
    const {id}=req.params
    await campground.findByIdAndDelete(id);
    req.flash('success','successfully deteted camp')
    res.redirect('/campgrounds')   
}
module.exports.edit=async(req,res)=>{
    const campgrounds=await campground.findByIdAndUpdate(req.params.id,req.body)
    const geoData=await geocoder.forwardGeocode({
        query:req.body.location,
        limit:1
    }).send()
    const images=req.files.map(f=>({url:f.path,filename:f.filename}))
    campgrounds.images.push(...images)
    campgrounds.geometry=geoData.body.features[0].geometry
    await campgrounds.save();
    if(req.body.deleteImages){
        for(let e of req.body.deleteImages){
            cloudinary.uploader.destroy(e)
        }
       let a= await campground.updateOne({ $pull: { images: { filename: { $in: req.body.deleteImages } } } })
       console.log(req.body.deleteImages)
       console.log(a)
    }
    req.flash('success','successfully updated camp')
    res.redirect(`/campgrounds/${campgrounds._id}`)
    }