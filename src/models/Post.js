import { Schema, model } from "mongoose";

const PostSchema = new Schema(
    {
        user: 
        {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
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
                ref: "User",
                required: false
            }
        ],
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Post = model("Post", PostSchema)
export default Post