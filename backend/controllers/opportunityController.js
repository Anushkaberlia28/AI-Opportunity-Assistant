const Opportunity = require("../models/Opportunity");

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

module.exports = {
    createOpportunity,
    getOpportunities
};