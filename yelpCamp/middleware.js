const {campgroundSchema}=require('./utils/joierror');
const campground=require('./models/compground')
const ExpressErrors=require('./utils/expressErrors')
const {reviewSchema}=require('./utils/joierror');

module.exports.isLogin=(req,res,next)=>{
    if(!req.isAuthenticated()){
       req.flash('error','login first')
        return res.redirect('/login')
    }
    next()
}
module.exports.validate=(req,res,next)=>{
    const result=campgroundSchema.validate(req.body)
    if(result.error){
        throw new ExpressErrors(result.error,404);
    }else{
        next()
    }
    }
    module.exports.isAuth=async(req,res,next)=>{
        const camp=await campground.findById(req.params.id)
        if(!camp.auther.equals(req.user._id)){
            req.flash('errror','no you do not have permission')
            return res.redirect('/login')
        }
        next()
    }
    module.exports.validateReview=(req,res,next)=>{
        const result=reviewSchema.validate(req.body)
        if(result.error){
            throw new ExpressErrors(result.error,404);
        }else{
            next()
        }
        }