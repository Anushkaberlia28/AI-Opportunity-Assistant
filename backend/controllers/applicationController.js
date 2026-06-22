const Application = require("../models/Application");

// CREATE application
const createApplication = async (req, res) => {
    try {
        const application = await Application.create(req.body);

        res.status(201).json(application);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// GET all applications
const getApplications = async (req, res) => {
    try {
        const applications = await Application.find().sort({ createdAt: -1 });

        res.status(200).json(applications);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// DELETE application
const deleteApplication = async (req, res) => {
    try {
        const deletedApplication = await Application.findByIdAndDelete(req.params.id);

        if (!deletedApplication) {
            return res.status(404).json({
                message: "Application not found"
            });
        }

        res.status(200).json({
            message: "Application deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// UPDATE application status
const updateApplicationStatus = async (req, res) => {
    try {
        const { status } = req.body;

        const updatedApplication = await Application.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );

        if (!updatedApplication) {
            return res.status(404).json({
                message: "Application not found"
            });
        }

        res.status(200).json(updatedApplication);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    createApplication,
    getApplications,
    deleteApplication,
    updateApplicationStatus
};