import express from "express";
import { fetchUser } from "../controller/photographerController.js";

const router = express.Router();

router.get("/all", fetchUser);

export default router;
