const express = require("express");

const router = express.Router();

const {
    registerUser,
    loginUser,
    updateSkills
} = require("../controllers/userController");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.patch("/:id/skills", updateSkills);

module.exports = router;