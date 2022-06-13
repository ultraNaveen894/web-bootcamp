const express=require('express')
const router=express.Router({mergeParams:true});
const catchAsync=require('../utils/catchAsync')
const {isLogin,validate,isAuth}=require('../middleware');
const  campgrounds  = require('../controllers/campgrounds');
const multer=require('multer')
const { storage } = require('../cloudinary');
const upload = multer({ storage });

router.route('/')
.get(catchAsync(campgrounds.camps))
.post(isLogin,upload.array('image'),validate, catchAsync(campgrounds.new))

router.get('/new',isLogin,campgrounds.newForm)

router.route('/:id')
.get(catchAsync(campgrounds.show))
.put(isLogin,isAuth,upload.array('image'),validate, catchAsync(campgrounds.edit))
.delete(isLogin,catchAsync(campgrounds.delete))

router.get('/:id/edit',isLogin,isAuth,catchAsync(campgrounds.editForm))

module.exports=router