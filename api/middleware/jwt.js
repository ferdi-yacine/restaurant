import jwt from "jsonwebtoken"


export const verifyToken = (req, res, next) => {
    const token = req.cookies.accessToken; 
    if (!token) return res.status(401).send("You are not authenticated!")

    jwt.verify(token, process.env.TOKEN, async (err, payload) => {
        if (err) return res.status(403).send("Token is not valid!");
        req.userId = payload.id;
        req.isAdmin = payload.isAdmin;
        next();
    });
}

export const verifyTokenAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.isAdmin) {
            next()
        } else {
            res.status(403).send("You are not allowed to take this action!")
        }
    })
}