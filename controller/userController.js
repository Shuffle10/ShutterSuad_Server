import User from "../models/models.js";
import bcrypt from "bcrypt";
import { request, response } from "express";
import jsonwebtoken from "jsonwebtoken";

const createToken = (_id) => {
  return jsonwebtoken.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

export const registerUser = async (request, response) => {
  let user = request.body;
  const email = user["email"];
  const exists = await User.findOne({ email });
  if (exists) {
    console.log("Email already in use");
  }
  const pwd = user["password"];
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(pwd, salt);
  user = { ...user, password: hashedPassword };

  const validateUser = new User(user);

  try {
    await validateUser.save();
    const token = createToken(validateUser._id);
    const registeredEmail = validateUser.email;
    response.status(201).json({ email: registeredEmail, token });
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const updateUser = async (request, response) => {
  let user = request.body;
  try {
    await User.findByIdAndUpdate(request.params.id, user, { new: true });
    response.status(200).json(user);
  } catch (err) {
    response.status(404).json({ message: err.message });
  }
};

export const deleteUser = async (request, response) => {
  try {
    const user = await User.findById(request.params.id);
    await user.remove();
    res.json({ success: true });
  } catch (err) {
    response.status(404).json({ message: err.message });
  }
};

export const loginUser = async (request, response) => {
  const { email, password } = request.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      throw Error("Incorrect email");
    }
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      throw Error("Password does not match");
    }

    const token = createToken(user._id);
    response.status(201).json({ email, token });
  } catch (err) {
    response.status(409).json({ msg: err.message });
  }
};
