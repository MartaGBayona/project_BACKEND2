export const isSuperAdmin = (req, res, next,) => {
    try {
        if(req.tokenData.name !== "super_admin") {
            return res.status(401).json({
                success: false,
                message: "UNATHORIZED"
            })
        }

        next();
    } catch (error){
        handleError(res, "You dont have permisions", 500)
    }
}