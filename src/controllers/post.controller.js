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
    try {
        const postId = req.params.id
        
        const deletePost = await Post
            .deleteOne(
                {
                    _id: postId
                }
            )

        res.status(201).json(
            {
                success: true,
                message: "Post delete successfully",
                data: deletePost
            }
        );
    } catch (error) {
        handleError(res, "Cant delete post", 500)
    }
}

export const updatePost = async (req, res) => {
    try {
        const postId = req.params.id
        const { title, description } = req.body;

        const existingPost = await Post.findById(postId);

        if (!existingPost) {
            return res.status(404).json({
                success: false,
                message: "Post not found"
            });
        }

        const modifiedPost = await Post
        .findByIdAndUpdate(
                postId,
            {
                title: title,
                description: description
            },
            {
                new: true
            }
        );

        res.status(201).json(
            {
                success: true,
                message: "Post update successfully",
                data: modifiedPost
            }
        );
    }catch (error) {
        res.status(500).json(
            handleError(res, "Cant get profile", 500)
        )
    }
}

export const getOwnUser = async (req, res) => {
    try{

        res.status(201).json(
            {
                success: true,
                message: "Profile retrieved successfully",
            }
        );
    }catch (error){
        res.status(500).json(
            {
                success: false,
                message: "Profile cant retrieved",
                error: error.message
            }
        );
    }
}