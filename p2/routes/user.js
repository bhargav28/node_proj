const express = require("express");
const {handleGetAllUsers, getUserById, updateUserById, deleteUserById, createNewUse} = require("../controllers/users");

const router = express.Router();


// Routes
router.get("/", handleGetAllUsers);

router.get("/:id", getUserById);

router.post("/", createNewUse);

router.patch("/:id", updateUserById);

router.delete("/:id", deleteUserById);

module.exports = router;