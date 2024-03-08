import User from "../models/User.js";

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
    }catch (error) {
        handleError(res, "Cant get users", 500)
    }
}