import Post from "../models/Post.js";
import User from "../models/User.js";
import { handleError } from "../utils/handleError.js";

export const createPost = async (req, res) => {
    try {
        const userId = req.tokenData.userId
        const { title, description } = req.body;

        if (title.length > 25) {
            return res.status(400).json({
                success: false,
                message: "The title cannot contain more than 25 characters.",
            });
        }

        if (description.length > 300) {
            return res.status(400).json({
                success: false,
                message: "The description cannot contain more than 300 characters.",
            });
        }

        const newPost = await Post.create(
            {
                user: userId,
                title,
                description,
            }
        );

        const user = await User
        .findById(userId)
        .select("name email -_id")
        
        res.status(201).json(
            {
                success: true,
                message: "Post create successfully",
                data: newPost, user
            }
        );
    } catch (error) {
        handleError(res, "Cant create post", 500)
    }
}