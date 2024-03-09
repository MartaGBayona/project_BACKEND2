import { Router } from "express";
import { getUserProfile, getUsers, updateUser } from "../controllers/user.controller.js";
import { auth } from "../middlewares/auth.js";
import { isSuperAdmin } from "../middlewares/isSuperAdmin.js";


const router = Router();

router.get('/',auth, isSuperAdmin, getUsers)
router.get('/profile', auth, getUserProfile)
router.put('/profile', auth, updateUser)

export default router;