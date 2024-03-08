import bcrypt from "bcrypt";
import User from "../models/User.js";

import Jwt from "jsonwebtoken";

import { handleError } from "../utils/handleError.js";

export const register = async (req, res) => {
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

        const existingUser = await User.findOne(
            { 
                email: email 
            }
        );

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "Email address is already in use",
            });
        }

        const passwordEncrypted = bcrypt.hashSync(password, 5);

        const newUser = await User.create({
            name: name,
            email: email,
            password: passwordEncrypted,
        });

        res.status(201).json({
            success: true,
            message: "User registered succesfully",
            data: newUser,
        });

    } catch (error) {
        handleError(res, "Cant register user", 500)
    }
}

export const login = async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        if(!email || !password) {
            return res.status(400).json(
                {
                    success: false,
                    message: "Email and password are necessary"
                }
            )
        };

        const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
		if (!validEmail.test(email)) {
			return res.status(400).json({
				success: false,
				message: "Email format is not valid",
			});
		}

        const user = await User.findOne(
            {
                email: email,
            }
        );

        if(!user) {
            res.status(400).json(
                {
                    success: false,
                    message: "Email or password invalid"
                }
            )
        };

        const isInvalidPassword = bcrypt.compareSync(password, user.password);

        if(!isInvalidPassword) {
            return res.status(400).json(
                {
                    success: false,
                    message: "Email or password invalid"
                }
            )
        };

        const token = Jwt.sign(
			{
				userId: user._id,
				roleName: user.role,
			},
			process.env.JWT_SECRET,
			{
				expiresIn: "8h",
			}
		);

        res.status(200).json(
            {
                success: true,
                message: "User logged successfully",
                token: token
            }
        )

    } catch (error) {
        handleError(res, "Cant login user", 500)
    }
}