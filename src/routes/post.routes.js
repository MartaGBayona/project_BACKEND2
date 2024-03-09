import { Router } from "express";
import { createPost } from "../controllers/post.controller.js";
import { auth } from "../middlewares/auth.js";

const router = Router();

router.post('/', auth, createPost)

export default router