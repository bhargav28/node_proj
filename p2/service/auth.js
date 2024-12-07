
const jwt = require("jsonwebtoken");

const secret = "BhargavTank";

function setUser(id) {
    return jwt.sign({id}, secret);
}

function getUser(token) {
    if(!token) return  null;
    return jwt.verify(token, secret);
}

module.exports = {
    setUser, getUser
};