import { Router } from "express";
import { deleteUser, getUserByEmail, getUserProfile, getUsers, updateRoleUser, updateUser } from "../controllers/user.controller.js";
import { auth } from "../middlewares/auth.js";
import { isSuperAdmin } from "../middlewares/isSuperAdmin.js";
import { getAllUsersPosts } from "../controllers/post.controller.js";


const router = Router();

router.get('/',auth, isSuperAdmin, getUsers)
router.get('/profile', auth, getUserProfile)
router.put('/profile', auth, updateUser)
router.get('/posts/:id', auth, getAllUsersPosts)
router.delete('/:id', auth, isSuperAdmin, deleteUser)
router.put('/role/:id', auth, isSuperAdmin, updateRoleUser)
router.get('/', auth, isSuperAdmin, getUserByEmail)

export default router;