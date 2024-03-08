import { Router } from "express";
import { getUserProfile, getUsers } from "../controllers/user.controller.js";
import { auth } from "../middlewares/auth.js";
//import { isSuperAdmin } from "../middlewares/isSuperAdmin.js";


const router = Router();

router.get('/',auth, getUsers)
router.get('/profile', auth, getUserProfile)

export default router;