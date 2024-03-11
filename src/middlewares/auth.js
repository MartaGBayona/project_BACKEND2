import Jwt from "jsonwebtoken";
import { handleError } from "../utils/handleError.js";

export const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if(!token) {
            return res.status(401).json(
                {
                    success: false,
                    message: "Unauthorized"
                }
            )
        };

        const decoder = Jwt.verify(
            token,
            process.env.JWT_SECRET
        )

        req.tokenData = decoder
    next();
    }catch(error) {
        handleError(res, "token invalid", 500)
    }
}