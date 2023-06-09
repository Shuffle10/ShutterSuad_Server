import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
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
  phone: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  province: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
  },
  basis: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  coverPhoto: {
    type: String,
    required: true,
  },
  portfolio: {
    type: [String],
  },
  unavailableDates: {
    type: [Date],
  },
});

const user = mongoose.model("user", userSchema);

export default user;
