import { Router } from "express";
import { createPost, deletePostById, getAllPosts, getOwnPost, getPostById, updatePost } from "../controllers/post.controller.js";
import { auth } from "../middlewares/auth.js";

const router = Router();

router.post('/', auth, createPost)
router.delete('/:id', auth, deletePostById)
router.put('/:id', auth, updatePost)
router.get('/own', auth, getOwnPost)
router.get('/', auth, getAllPosts)
router.get('/:id', auth, getPostById)

export default router