import Post from "../models/Post.js";
import User from "../models/User.js";
import { handleError } from "../utils/handleError.js";

export const createPost = async (req, res) => {
    try {
        const userId = req.tokenData.userId
        const { title, description } = req.body;

        if (title.length > 25 || description.length > 300) {
            return res.status(400).json({
                success: false,
                message: "Title or description is too long",
            });
        }

        const newPost = await Post.create(
            {
                user: userId,
                title,
                description,
            }
        )

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

export const deletePostById = async (req, res) => {
    try{
        res.status(201).json(
            {
                success: true,
                message: "Post create successfully",
                data: newPost, user
            }
        );
    }catch (error) {
        handleError(res, "Cant delete post", 500)
    }
}