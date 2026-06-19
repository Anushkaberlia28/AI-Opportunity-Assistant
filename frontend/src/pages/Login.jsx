import "../styles/Login.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {

        try {

            const response = await axios.post("http://localhost:5001/api/users/login",
                {
                    email,
                    password
                }
            );

            const user = response.data?.user ?? response.data;
            console.log("LOGIN RESPONSE", response.data, user);

            if (!user) {
                throw new Error("Login response does not contain user data.");
            }

            const userPlain = JSON.parse(JSON.stringify(user));
            const userString = JSON.stringify(userPlain);
            localStorage.setItem("user", userString);
            console.log("LOGIN: saved user to localStorage", userString, localStorage.getItem("user"));

            navigate("/dashboard");

            //alert(response.data.message);
            //navigate("/dashboard");

        } catch (error) {

            console.log("ERROR:", error);

            console.log("RESPONSE:", error.response);

            alert(error.message);

        }
    };

    return (
        <div className="container">

            <div className="left-section">

                <span className="badge">
                    AI-Powered Career Platform
                </span>

                <h1>
                    Discover Your Next Opportunity
                </h1>

                <p>
                    Track internships, jobs, hackathons,
                    scholarships and placement opportunities
                    with AI-powered recommendations.
                </p>

                <ul>
                    <li>✓ AI Opportunity Tracking</li>
                    <li>✓ Smart Resume Autofill</li>
                    <li>✓ Deadline Notifications</li>
                    <li>✓ Career Insights & Guidance</li>
                </ul>

            </div>

            <div className="login-box">

                <h2>Sign In</h2>

                <p className="subtitle">
                    Welcome back! Please enter your details.
                </p>

                <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button onClick={handleLogin}>
                    Continue
                </button>

            </div>

        </div>
    );
}

export default Login;