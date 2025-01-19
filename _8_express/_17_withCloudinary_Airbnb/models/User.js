const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
  firstName:{
    type:String,
    required:true,
  },
  lastName:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
    unique:true,
  },
  password:{
    type:String,
    required:true,
  },
  userType:{
    type:String,
    enum:['guest','host'],
    required:true,
  },
  favouriteHomes:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Home',
  }],
  otp: {
    code: {
      type: Number,
    },
    expiry: {
      type: Date,
    },
  },
})

module.exports=mongoose.model('User',userSchema);