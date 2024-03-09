import Post from "../models/Post.js";
import { handleError } from "../utils/handleError.js";

export const createPost = async (req, res) => {
    try {
        const userId = req.tokenData.userId
        const { title, description } = req.body;

        const newPost = await Post.create(
            {
                userId,
                title,
                description,
            }
        );
        res.status(201).json(
            {
                success: true,
                message: "Post create successfully",
                data: newPost
            }
        );
    } catch (error) {
        handleError(res, "Cant create post", 500)
    }
}