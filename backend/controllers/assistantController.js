const https = require("https");

const chatWithGemini = async (req, res) => {
    try {
        const { message, context = "" } = req.body;

        if (!message || !message.trim()) {
            return res.status(400).json({
                message: "Please enter a message for the assistant."
            });
        }

        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return res.status(200).json({
                reply: "Gemini is not configured yet. Add GEMINI_API_KEY to your backend environment to enable live AI responses."
            });
        }

        const prompt = `You are AI Opportunity Assistant for a career platform. Help the user with internships, job applications, resumes, and career planning. Keep the response concise, practical, and encouraging.\n\nUser message: ${message.trim()}\n\nContext: ${context}`;

        const payload = JSON.stringify({
            contents: [
                {
                    parts: [{ text: prompt }]
                }
            ],
            generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 400
            }
        });

        const options = {
            hostname: "generativelanguage.googleapis.com",
            path: `/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Content-Length": Buffer.byteLength(payload)
            }
        };

        const request = https.request(options, (response) => {
            let data = "";

            response.on("data", (chunk) => {
                data += chunk;
            });

            response.on("end", () => {
                try {
                    const parsed = JSON.parse(data);

                    if (parsed.error) {
                        return res.status(502).json({
                            message: parsed.error.message || "Gemini request failed",
                            reply: "The AI service is temporarily unavailable. Please try again shortly."
                        });
                    }

                    const reply = parsed?.candidates?.[0]?.content?.parts?.[0]?.text || "I could not generate a response right now.";

                    return res.status(200).json({ reply });
                } catch (error) {
                    return res.status(502).json({
                        message: error.message,
                        reply: "The AI service returned an unexpected response."
                    });
                }
            });
        });

        request.on("error", () => {
            res.status(502).json({
                reply: "I could not reach the AI service right now. Please try again in a moment."
            });
        });

        request.write(payload);
        request.end();
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    chatWithGemini
};
