// const express = require("express");

// const {
//     createOpportunity,
//     getOpportunities
// } = require("../controllers/opportunityController");

// const router = express.Router();

// router.post("/", createOpportunity);

// router.get("/", getOpportunities);

// module.exports = router;


const express = require("express");

const {
    createOpportunity,
    getOpportunities,
    deleteOpportunity
} = require("../controllers/opportunityController");

const router = express.Router();

router.post("/", createOpportunity);

router.get("/", getOpportunities);

router.delete("/:id", deleteOpportunity);

module.exports = router;