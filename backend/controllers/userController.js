const User = require("../models/User");

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const user = await User.create({
            name,
            email,
            password
        });

        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        if (user.password !== password) {
            return res.status(400).json({
                message: "Invalid password"
            });
        }

        res.status(200).json({
            message: "Login Successful",
            user
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    registerUser,
    loginUser
};