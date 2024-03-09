export const isSuperAdmin = (req, res, next,) => {
    try {
        console.log(req.tokenData.roleName)
        if(req.tokenData.roleName !== "super_admin") {
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