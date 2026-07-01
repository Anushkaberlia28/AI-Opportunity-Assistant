const express = require("express");

const router = express.Router();

const {
    registerUser,
    loginUser,
    updateSkills,
    getProfile,

    updateProfile
} = require("../controllers/userController");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.patch("/:id/skills", updateSkills);
router.get("/:id", getProfile);

router.put("/:id", updateProfile);

module.exports = router;