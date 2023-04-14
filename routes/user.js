import express from "express";
import {
  loginUser,
  registerUser,
  updateUser,
} from "../controller/userController.js";

import requireAuth from "../middleware/requireAuth.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
// router.use(requireAuth);
router.put("/update/:id", updateUser);

export default router;
