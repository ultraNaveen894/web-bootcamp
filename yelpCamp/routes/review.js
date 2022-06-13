const express=require('express')
const router=express.Router({mergeParams:true});
const catchAsync=require('../utils/catchAsync')
const {validateReview,isLogin}=require('../middleware')
const review=require('../controllers/review')


router.post('/review',isLogin,validateReview, catchAsync(review.newReview))

router.delete('/delete/:reviewId',isLogin,catchAsync(review.delete))

module.exports=router

