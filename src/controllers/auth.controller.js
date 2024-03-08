import bcrypt from "bcrypt";
import User from "../model/User.js";

import Jwt from "jsonwebtoken";

import { handeError } from "../utils/handleError.js";

export const register = async(req,res) => {
    try {
        const name = req.body.name
        const email = req.body.email;
        const password = req.body.password

        if (password.length < 6 || password.length > 10) {
			return res.status(400).json({
				success: false,
				message: "Password must contain between 6 and 10 characters",
			});
		}

		const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
		if (!validEmail.test(email)) {
			return res.status(400).json({
				success: false,
				message: "format email invalid",
			});
		}

		const passwordEncrypted = bcrypt.hashSync(password, 5);

		const newUser = await User.create({
			email: email,
			password: passwordEncrypted,
		});
        
		res.status(201).json({
			success: true,
			message: "User registered succesfully",
			data: newUser,
		});

    }catch(error) {
        handeError(res, "Cant register user", 500)
    }
}