const express = require("express");

const {
    createApplication,
    getApplications,
    deleteApplication,
    updateApplicationStatus
} = require("../controllers/applicationController");

const router = express.Router();

router.post("/", createApplication);

router.get("/", getApplications);

router.delete("/:id", deleteApplication);

router.patch("/:id", updateApplicationStatus);

module.exports = router;