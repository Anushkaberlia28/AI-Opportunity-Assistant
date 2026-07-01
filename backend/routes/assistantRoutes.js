const express = require("express");
const { chatWithGemini } = require("../controllers/assistantController");

const router = express.Router();

router.post("/chat", chatWithGemini);

module.exports = router;
