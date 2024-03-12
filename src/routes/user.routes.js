import { Router } from "express";
import { getAllUsersPosts, getUserProfile, getUsers, updateUser } from "../controllers/user.controller.js";
import { auth } from "../middlewares/auth.js";
import { isSuperAdmin } from "../middlewares/isSuperAdmin.js";


const router = Router();

router.get('/',auth, isSuperAdmin, getUsers)
router.get('/profile', auth, getUserProfile)
router.put('/profile', auth, updateUser)
router.get('/posts/:id', auth, getAllUsersPosts)

export default router;