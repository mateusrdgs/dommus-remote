import mongoose from 'mongoose';
import UserSchema from './user';
import ResidenceSchema from './residence';

const AccountSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  hash: String,
  salt: String,
  pin: {
    type: Number,
    required: true
  },
  users: [UserSchema],
  residences: [ResidenceSchema]
});

mongoose.model('Account', AccountSchema);