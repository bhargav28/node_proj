const SignUp = require("../models/signup");
const {v4: uuidv4} = require("uuid");
const {setUser} = require("../service/auth");

async function login(req, res) {
    const {email, password} = req.body;
    const user = await SignUp.findOne({
        email: email,
        password: password,
    });
    if (!user) return res.status(401).json({error: "Invalid login credentials"});
    const token = setUser(user._id);
    return res.status(200).json({Success: user, auth_token: token});
}

module.exports = {
    login
};