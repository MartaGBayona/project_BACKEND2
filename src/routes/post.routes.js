import { Router } from "express";
import { createPost, deletePostById, getAllPosts, getOwnPost, updatePost } from "../controllers/post.controller.js";
import { auth } from "../middlewares/auth.js";
import { isOwnProfile } from "../middlewares/isOwnProfile.js"

const router = Router();

router.post('/', auth, createPost)
router.delete('/:id', auth, deletePostById)
router.put('/:id', auth, isOwnProfile, updatePost)
router.get('/own', auth, getOwnPost)
router.get('/', auth, getAllPosts)

export default router