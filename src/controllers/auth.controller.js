import bcrypt from "bcrypt";
import User from "../model/User.js";

import Jwt from "jsonwebtoken";

import { handeError } from "../utils/handleError.js";

export const register = async(req,res) => {
    try {
		res.status(201).json({
			success: true,
			message: "User registered succesfully",
			data: newUser,
		});
        
    }catch(error) {
        handeError(res, "Cant register user", 500)
    }
}