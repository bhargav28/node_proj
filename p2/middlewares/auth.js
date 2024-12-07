const {getUser} = require("../service/auth");

async function verifyToken(req, res, next) {
    const userUid = req.headers["authorization"];
    req.user = null;
    if (!userUid || !userUid.startsWith("Bearer ")) return next();
    const token = userUid.split("Bearer ")[1];
    const user = getUser(token);
    if (!user) {
        return res.status(401).send("Unauthorized");
    }
    req.user = user;
    next();
}


module.exports = {verifyToken};