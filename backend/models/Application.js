const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
    {
        opportunityTitle: {
            type: String,
            required: true
        },

        company: {
            type: String,
            required: true
        },

        status: {
            type: String,
            enum: ["Applied", "Interview", "Rejected", "Selected"],
            default: "Applied"
        },

        appliedDate: {
            type: String,
            required: true
        },

        notes: {
            type: String,
            default: ""
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Application", applicationSchema);