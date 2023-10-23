import mongoose from 'mongoose';
const {Schema} = mongoose;

const UserSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    question:{
      type: String,
      required: true,
    },
    role:{
      type: Number,
      default: 0,
    },
  },{timestamps:true});
  
  const User = mongoose.model('user', UserSchema);
  
  export default User;


