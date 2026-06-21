// const Opportunity = require("../models/Opportunity");

// const createOpportunity = async (req, res) => {

//     try {

//         const opportunity = await Opportunity.create(req.body);

//         res.status(201).json(opportunity);

//     } catch (error) {

//         res.status(500).json({
//             message: error.message
//         });

//     }

// };

// const getOpportunities = async (req, res) => {

//     try {

//         const opportunities = await Opportunity.find();

//         res.status(200).json(opportunities);

//     } catch (error) {

//         res.status(500).json({
//             message: error.message
//         });

//     }

// };

// module.exports = {
//     createOpportunity,
//     getOpportunities
// };


const Opportunity = require("../models/Opportunity");

// CREATE opportunity
const createOpportunity = async (req, res) => {
    try {
        const opportunity = await Opportunity.create(req.body);

        res.status(201).json(opportunity);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// GET all opportunities
const getOpportunities = async (req, res) => {
    try {
        const opportunities = await Opportunity.find();

        res.status(200).json(opportunities);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// DELETE opportunity
const deleteOpportunity = async (req, res) => {
    try {
        const deletedOpportunity = await Opportunity.findByIdAndDelete(req.params.id);

        if (!deletedOpportunity) {
            return res.status(404).json({
                message: "Opportunity not found"
            });
        }

        res.status(200).json({
            message: "Opportunity deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    createOpportunity,
    getOpportunities,
    deleteOpportunity
};