import "../styles/Login.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [isRegistering, setIsRegistering] = useState(false);

    const handleLogin = async () => {
        try {
            const response = await axios.post(
                "http://localhost:5001/api/users/login",
                {
                    email,
                    password
                }
            );

            localStorage.setItem(
                "user",
                JSON.stringify(response.data.user)
            );

            navigate("/dashboard");
        } catch (error) {
            console.log("ERROR:", error);
            console.log("RESPONSE:", error.response);
            alert(error.response?.data?.message || error.message);
        }
    };

    const handleRegister = async () => {
        try {
            if (!name || !email || !password || !age) {
                alert("Please fill in your name, email, password, and age.");
                return;
            }

            const response = await axios.post(
                "http://localhost:5001/api/users/register",
                {
                    name,
                    email,
                    password,
                    age: Number(age)
                }
            );

            localStorage.setItem("user", JSON.stringify(response.data));
            navigate("/dashboard");
        } catch (error) {
            console.log("ERROR:", error);
            console.log("RESPONSE:", error.response);
            alert(error.response?.data?.message || error.message);
        }
    };

    return (
        <div className="login-page">
            <div className="login-shell">
                <div className="login-left">
                    <span className="login-badge">
                        AI-Powered Career Platform
                    </span>

                    <h1>
                        Discover, track, and manage your next opportunity with
                        AI.
                    </h1>

                    <p>
                        AI Opportunity Assistant Plan helps students organize
                        internships, jobs, hackathons, scholarships, deadlines,
                        and applications from one premium dashboard.
                    </p>

                    <div className="feature-list">
                        <div className="feature-item">
                            <span>✨</span>
                            <div>
                                <h4>AI Opportunity Tracking</h4>
                                <p>
                                    Keep all career opportunities in one place.
                                </p>
                            </div>
                        </div>

                        <div className="feature-item">
                            <span>📄</span>
                            <div>
                                <h4>Smart Resume Workflow</h4>
                                <p>
                                    Manage applications and prepare documents
                                    faster.
                                </p>
                            </div>
                        </div>

                        <div className="feature-item">
                            <span>⏰</span>
                            <div>
                                <h4>Deadline Visibility</h4>
                                <p>
                                    Never miss important internships and job
                                    timelines.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="login-right">
                    <div className="login-card">
                        <div className="login-card-top">
                            <span className="mini-badge">
                                {isRegistering ? "Create Account" : "Welcome Back"}
                            </span>
                            <h2>
                                {isRegistering ? "Register to get started" : "Sign in to continue"}
                            </h2>
                            <p>
                                Access your dashboard, opportunities, and AI
                                career workflow.
                            </p>
                        </div>

                        <div className="login-form">
                            {isRegistering && (
                                <div className="input-group">
                                    <label>Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your full name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            )}

                            <div className="input-group">
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                />
                            </div>

                            <div className="input-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>

                            {isRegistering && (
                                <div className="input-group">
                                    <label>Age</label>
                                    <input
                                        type="number"
                                        min="16"
                                        max="100"
                                        placeholder="Enter your age"
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                    />
                                </div>
                            )}

                            <button
                                className="login-btn"
                                onClick={isRegistering ? handleRegister : handleLogin}
                            >
                                {isRegistering ? "Create Account" : "Continue to Dashboard"}
                            </button>

                            <button
                                className="login-btn"
                                style={{ marginTop: "10px", background: "#f3f4f6", color: "#111827" }}
                                onClick={() => setIsRegistering(!isRegistering)}
                            >
                                {isRegistering ? "Already have an account? Sign in" : "Need an account? Register"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;