import express from "express";
import {
  loginUser,
  registerUser,
  updateUser,
  deleteUser,
} from "../controller/userController.js";

import requireAuth from "../middleware/requireAuth.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
// router.use(requireAuth);
router.put("/update/:id", updateUser);
router.put("/delete/:id", deleteUser);

export default router;
