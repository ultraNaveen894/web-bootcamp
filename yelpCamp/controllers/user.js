const User=require('../models/user')

module.exports.registerForm=async(req,res)=>{
    res.render('user/register')
}
module.exports.register=async (req,res)=>{
    try{
    const {username,password,email}=req.body
    const user=new User({email,username});
    const registerUser=await User.register(user,password)
    req.login(registerUser, function(err) {
        if (err) { return next(err); }
        req.flash('success','welcome to campgrounds')
        res.redirect('/campgrounds')
      });
    }catch(e){
        req.flash('error',e.message)
        res.redirect('register')
    }
}
module.exports.loginForm=(req,res)=>{
    res.render('user/login')
}
module.exports.login=(req,res)=>{
    req.flash('success','login successfull')
    const returnTo=req.session.returnTo||'/campgrounds';
    delete req.session.returnTo
    res.redirect(returnTo)
}
module.exports.logout=function(req, res) {
    req.logout(function() {
        req.flash('success','goodbye')
      res.redirect('/campgrounds');
    });
  }