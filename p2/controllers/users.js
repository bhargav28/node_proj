const User = require("../models/users");

async function handleGetAllUsers(req, res) {
    const dbUsers = await User.find({});
    return res.json(dbUsers);
}

async function getUserById(req, res) {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    return res.json(user);
}

async function createNewUse(req, res) {
    const body = req.body;
    if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
        res.status(400).json({ msg: "All field are required" });
    }

    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title,
    });

    return res.status(201).json({msg: "Success"});
}

async function deleteUserById(req, res) {
    await User.findByIdAndDelete(req.params.id);
    return res.join({status: "Deleted user"});
}

async function updateUserById(req, res) {
    await User.findByIdAndUpdate(req.params.id, {firstName: "Changed"});
    return res.json({status: "Success"});
}

module.exports = {
    handleGetAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
    createNewUse,
}