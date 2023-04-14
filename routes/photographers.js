import express from "express";
import { fetchUser, fetchUsers } from "../controller/photographerController.js";

const router = express.Router();

router.get("/all", fetchUsers);
router.get("/:id", fetchUser);

export default router;
