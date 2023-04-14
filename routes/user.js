import express from "express";
import {
  loginUser,
  registerUser,
  updateUser,
} from "../controller/userController.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.put("/update/:id", updateUser);

export default router;
