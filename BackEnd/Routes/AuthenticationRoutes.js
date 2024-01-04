import express from "express";
import { loginUser, registerUser } from "../Controllers/AuthController.js";

const router = express.Router();

//Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);

export default router;
