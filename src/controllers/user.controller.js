import User from "../models/User.js";
import { handleError } from "../utils/handleError.js";

export const getUsers = async (req, res) => {
    try {
        const findUsers = await User
            .find()
            .select("-password");

        res.status(201).json(
            {
                success: true,
                message: "Users retrieved successfully",
                data: findUsers
            }
        );
    } catch (error) {
        handleError(res, "Cant get users", 500)
    }
}

export const getUserProfile = async (req, res) => {
    try {
        const userId = req.tokenData.userId

        const findUser = await User
            .findOne(
                {
                    _id: userId
                },
            )
            .select("-password")

        res.status(201).json(
            {
                success: true,
                message: "Profile retrieved successfully",
                data: findUser
            }
        );
    } catch (error) {
        handleError(res, "Cant get profile", 500)
    }
}

export const updateUser = async (req, res) => {
    try {
        const userId = req.tokenData.userId
        const name = req.body.name

        const modifiedUser = await User
            .findOneAndUpdate(
                {
                    _id: userId
                },
                {
                    name: name
                },
            )
            .select("-password")

        res.status(201).json(
            {
                success: true,
                message: "Profile update successfully",
                data: modifiedUser
            }
        );
    } catch (error) {
        handleError(res, "Cant update profile", 500)
    }
}