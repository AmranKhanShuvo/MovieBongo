import express from "express";
import {
  loginUser,
  signupUser,
  getCurrentUser,
} from "../controllers/userController.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.post("/login", loginUser).post("/register", signupUser);
router.use(checkAuth);
router.get("/user", getCurrentUser);

export { router as userRouter };
