const mongoose=require('mongoose')
const {Schema}=mongoose
const bcrypt=require('bcrypt')

const loginSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
})

loginSchema.statics.findUser=async function(name,password){
    let foundUser=await this.findOne(name)
    let compare=await bcrypt.compare(password,foundUser.password)
    return compare?foundUser:false
}

loginSchema.pre('save',async function (next){
    if(this.isModified('password')) return next()
    this.password=await bcrypt.hash(this.password,12)
    next();
})

module.exports=mongoose.model("UserDetails",loginSchema)