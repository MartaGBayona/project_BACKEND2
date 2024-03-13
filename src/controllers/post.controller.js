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
        const userId = req.tokenData.id

        const findUser = User.find(
            {
                _id: postId,
                user: userId
            }
        )

        if (!findUser) {
            res.status(400).json(
                {
                    success: true,
                    message: "Post not find",
                }
            );
        }

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
        const userId = req.tokenData.id

        const findUser = User.find(
            {
                _id: postId,
                user: userId
            }
        );

        if (!findUser) {
            res.status(400).json(
                {
                    success: true,
                    message: "Post not find",
                }
            );
        };

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
    } catch (error) {
        res.status(500).json(
            handleError(res, "Cant get profile", 500)
        )
    }
}

export const getOwnPost = async (req, res) => {
    try {
        const userId = req.tokenData.userId
        const findOwnPosts = await Post
            .find(
                {
                    user: userId
                }
            )
            .populate('user', 'title description')
        res.status(201).json(
            {
                success: true,
                message: "Posts retrieved successfully",
                data: findOwnPosts

            }
        );
    } catch (error) {
        res.status(500).json(
            handleError(res, "Posts cant retrieved", 500)
        );
    }
}

export const getAllPosts = async (req, res) => {
    try {
        const findPosts = await Post
            .find()
            .populate('user', '-password')
            
        res.status(201).json(
            {
                success: true,
                message: "All posts retrieved successfully",
                data: findPosts

            }
        );
    } catch (error) {
        res.status(500).json(
            handleError(res, "Posts cant retrieved", 500)
        );
    }
};

export const getPostById = async (req, res) => {
    try {

        const postId = req.params.id

        const findPosts = await Post
        .findOne(
            {
            _id: postId
            }
        )

        res.status(201).json(
            {
                success: true,
                message: "All posts retrieved successfully",
                data: findPosts
            }
        );
    } catch (error) {
        res.status(500).json(
            handleError(res, "Posts cant retrieved", 500)
        )
    }
}

export const getAllUsersPosts = async (req, res) => {
    try {

        const userId = req.params.id
        const findUserPosts = await Post.find({user: userId})
        
        console.log(userId)

        
        if (!findUserPosts) {
            return res.status(400).json({
                success: false,
                message: "No posts found for this user",
            });
        }

        res.status(200).json({
            success: true,
            message: "Posts retrieved successfully",
            data: findUserPosts
        });

    } catch (error) {
        handleError(res, "Cant retrieved posts", 500)
    }
}

export const pushLike = async (req, res) => {
    try {
        const postId = req.params.id
        const userId = req.tokenData.userId
        const post = await Post
        .findOne(
            {
            _id: postId
            }
        )
        if(!post) {
            return res.status(400).json(
                {
                    success: true,
                    message: "Cant find post",
                }
            );
        }
        const hasLike = post.like.includes(userId);
        if(hasLike) {
            post.like.pull(userId)
        } else {
            post.like.push(userId)
        }
        await post.save();

        res.status(200).json({
            success: true,
            message:hasLike ? "Post unlike successfully" : "Post like successfully",
            data: post
        });

    } catch (error) {
        handleError(res, "Cant put like", 500)
    }
}