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
                {
                    new: true
                }
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

export const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id

        const findUser = await User.findOne(
            {
                _id: userId,
            }
        )

        if (!findUser) {
            res.status(400).json(
                {
                    success: false,
                    message: "User not find",
                }
            );
        }

        const deleteUser = await User
            .deleteOne(
                {
                    _id: userId
                }
            )

        res.status(201).json(
            {
                success: true,
                message: "User delete successfully",
                data: deleteUser
            }
        );
    } catch (error) {
        handleError(res, "Cant delete user", 500)
    }
}

export const updateRoleUser = async (req, res) => {
    try {
        const userId = req.params.id
        const newRole = req.body.role

        const user = await User.findById(userId);

        if (user.role === newRole) {
            return res.status(400).json({
                success: false,
                message: "the user already has this role"
            })
        }

        const modifiedUser = await User
            .findOneAndUpdate(
                {
                    _id: userId
                },
                {
                    role: newRole
                },
                {
                    new: true
                }
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

// export const getUserByEmail = async (req, res) => {
//     try {

//         const userEmail = req.query.email

//         if (!userEmail) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Missing email"
//             })
//         }
//         console.log("Usuario encontrado:", userEmail);
//         const findUser = await User.findOne(
//             {
//                 email: userEmail
//             },
//             select("-password")
//         )
        

//         res.status(200).json({
//             success: true,
//             message: "user profile retrieved successfully",
//             data: findUser
//         })

//     } catch (error) {
//         handleError(res, "Cant get user profile", 500)
//     }
// }