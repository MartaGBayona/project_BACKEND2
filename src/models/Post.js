import { Schema, model } from "mongoose";

const PostSchema = new Schema(
    {
        user: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    ],
        title:
        {
            type: String,
            required: false
        },
        description: 
        {
            type: String,
            required: true,
        },
        like:[
            {
                type: Schema.Types.ObjectId,
                required: false
            }
        ],
        createdAt:
        {
            type: Date,
            default: Date.now
        }
    }
)

const Post = model("Post", PostSchema)
export default Post