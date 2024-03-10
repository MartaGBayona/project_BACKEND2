import { Router } from "express";
import { createPost, deletePostById, updatePost } from "../controllers/post.controller.js";
import { auth } from "../middlewares/auth.js";

const router = Router();

router.post('/', auth, createPost)
router.delete('/:id', auth, deletePostById)
router.put('/:id', auth, updatePost)

export default router