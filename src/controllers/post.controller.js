import Post from "../models/Post.js";
import { handleError } from "../utils/handleError.js";

export const createPost = async (req, res) => {
    try {
        const userId = req.tokenData.userId;
        const title = req.body.title;
        const description = req.body.description;

        const newPost = await Post.create(
            {
                _id: userId,
                title: title,
                description: description,
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