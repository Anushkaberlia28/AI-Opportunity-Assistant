const User = require("../models/User");

const registerUser = async (req, res) => {
    try {
        const { name, email, password, age } = req.body;

        const user = await User.create({
            name,
            email,
            password,
            age: age === undefined || age === "" ? 0 : Number(age)
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
const getProfile = async (req, res) => {

    try {

        const user = await User.findById(req.params.id).select("-password");

        res.status(200).json(user);

    }

    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

const updateProfile = async (req, res) => {

    try {

        const updatedUser = await User.findByIdAndUpdate(

            req.params.id,

            req.body,

            { new: true }

        ).select("-password");

        res.status(200).json(updatedUser);

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};
const updateSkills = async (req, res) => {

    try {

        const { skills } = req.body;

        const updatedUser = await User.findByIdAndUpdate(

            req.params.id,

            {
                skills
            },

            {
                new: true
            }

        );

        if (!updatedUser) {

            return res.status(404).json({
                message: "User not found"
            });

        }

        res.status(200).json(updatedUser);

    }

    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {
    registerUser,
    loginUser,
    updateSkills,
    getProfile,

    updateProfile
};