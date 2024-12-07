const SignUp = require("../models/signup");
const {setUser} = require("../service/auth");

async function signUp(req, res) {
    try {
        const {name, email, password} = req.body;
        const user = await SignUp.create({
            name: name,
            email: email,
            password: password,
        });
        const token = setUser(user._id);
        return res.status(200).json({Success: user, auth_token: token});
    } catch (e) {
        res.status(500).json({error: e});
    }

}

module.exports = { signUp };