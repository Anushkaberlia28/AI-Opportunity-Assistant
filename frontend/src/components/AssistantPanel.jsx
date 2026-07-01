import { useState } from "react";
import axios from "axios";
import "../styles/AssistantPanel.css";

function AssistantPanel() {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content: "Hi! I can help you refine your resume, suggest internships, and guide your application strategy."
        }
    ]);
    const [loading, setLoading] = useState(false);

    const handleSend = async (e) => {
        e.preventDefault();

        const trimmed = message.trim();
        if (!trimmed) return;

        const userMessage = { role: "user", content: trimmed };
        setMessages((prev) => [...prev, userMessage]);
        setMessage("");
        setLoading(true);

        try {
            const savedUser = JSON.parse(localStorage.getItem("user") || "{}");
            const response = await axios.post("http://localhost:5001/api/assistant/chat", {
                message: trimmed,
                context: savedUser?.name ? `User name: ${savedUser.name}` : ""
            });

            const assistantMessage = {
                role: "assistant",
                content: response.data?.reply || "I couldn't generate a response right now."
            };

            setMessages((prev) => [...prev, assistantMessage]);
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: "The assistant is unavailable right now. Please try again shortly."
                }
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="assistant-panel">
            <div className="assistant-panel-header">
                <div>
                    <p className="assistant-kicker">AI helper</p>
                    <h3>Career Coach</h3>
                </div>
            </div>

            <div className="assistant-messages">
                {messages.map((item, index) => (
                    <div key={`${item.role}-${index}`} className={`assistant-message ${item.role}`}>
                        <strong>{item.role === "assistant" ? "AI" : "You"}</strong>
                        <p>{item.content}</p>
                    </div>
                ))}
                {loading && (
                    <div className="assistant-message assistant">
                        <strong>AI</strong>
                        <p>Thinking...</p>
                    </div>
                )}
            </div>

            <form className="assistant-form" onSubmit={handleSend}>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ask for resume help or internship ideas..."
                />
                <button type="submit" disabled={loading}>
                    {loading ? "Sending..." : "Send"}
                </button>
            </form>
        </div>
    );
}

export default AssistantPanel;
