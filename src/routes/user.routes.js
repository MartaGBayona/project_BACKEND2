import { Router } from "express";
import { getUsers } from "../controllers/user.controller.js";
import { auth } from "../middlewares/auth.js";

const router = Router();

router.get('/',auth,  getUsers)

export default router;