const mongoose = require('mongoose');
const {Schema}=mongoose;

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/demo');
  console.log('connected')
}

const tweetSchema=new Schema({
    text:String,
    likes:Number,
    user:{type:Schema.Types.ObjectId,ref:'User'}
    
})
const formschema= Schema({
    name:String,
    city:String,
    products:[{type:Schema.Types.ObjectId,ref:'Product'}]
})
const userSchema=new Schema({
    userName:String,
    age:Number,
})

const User=mongoose.model('User',userSchema);
const Form=mongoose.model('Form',formschema);
const Tweets=mongoose.model('Tweets',tweetSchema);

const makeTweets=async()=>{
    const u=new User({userName:'raghu',age:24})
    const tweet1=new Tweets({text:'i love my friend',likes:100})
    tweet1.user=u;
    await u.save();
    await tweet1.save()
    console.log(tweet1)
}
makeTweets();
