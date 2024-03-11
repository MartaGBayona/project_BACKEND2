import { handleError } from "../utils/handleError.js";

export const isOwnProfile = (req, res, next) => {
    try {
        console.log(req.tokenData.userId)
        if (req.tokenData.userId !== ObjectId) {
            return res.status(401).json(
                {
                    success: false,
                    message: "Unauthorized, is not your profile"
                }
            )
        }
        next();
    } catch (error) {
        handleError(res, "You dont have permisions", 500)
    }
}