const joi=require('joi')

module.exports.campgroundSchema=joi.object({
    title:joi.string().required(),
    price:joi.number().min(5).required(),
    description:joi.string().required(),
    // image:joi.string().required(),
    location:joi.string().required(),
    deleteImages:joi.array()
})

module.exports.reviewSchema=joi.object({
    rating:joi.number().required(),
    review:joi.string().required()
})