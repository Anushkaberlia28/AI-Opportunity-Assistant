// import "../styles/Login.css";
// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Login() {
//     const navigate = useNavigate();

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const handleLogin = async () => {

//         try {

//             const response = await axios.post("http://localhost:5001/api/users/login",
//                 {
//                     email,
//                     password
//                 }
//             );

//             const user = response.data?.user ?? response.data;
//             console.log("LOGIN RESPONSE", response.data, user);

//             if (!user) {
//                 throw new Error("Login response does not contain user data.");
//             }

//             const userPlain = JSON.parse(JSON.stringify(user));
//             const userString = JSON.stringify(userPlain);
//             localStorage.setItem("user", userString);
//             console.log("LOGIN: saved user to localStorage", userString, localStorage.getItem("user"));

//             navigate("/dashboard");

//             //alert(response.data.message);
//             //navigate("/dashboard");

//         } catch (error) {

//             console.log("ERROR:", error);

//             console.log("RESPONSE:", error.response);

//             alert(error.message);

//         }
//     };

//     return (
//         <div className="container">

//             <div className="left-section">

//                 <span className="badge">
//                     AI-Powered Career Platform
//                 </span>

//                 <h1>
//                     Discover Your Next Opportunity
//                 </h1>

//                 <p>
//                     Track internships, jobs, hackathons,
//                     scholarships and placement opportunities
//                     with AI-powered recommendations.
//                 </p>

//                 <ul>
//                     <li>✓ AI Opportunity Tracking</li>
//                     <li>✓ Smart Resume Autofill</li>
//                     <li>✓ Deadline Notifications</li>
//                     <li>✓ Career Insights & Guidance</li>
//                 </ul>

//             </div>

//             <div className="login-box">

//                 <h2>Sign In</h2>

//                 <p className="subtitle">
//                     Welcome back! Please enter your details.
//                 </p>

//                 <input
//                     type="email"
//                     placeholder="Email Address"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />

//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />

//                 <button onClick={handleLogin}>
//                     Continue
//                 </button>

//             </div>

//         </div>
//     );
// }

// export default Login;

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
            const response = await axios.post(
                "http://localhost:5001/api/users/login",
                {
                    email,
                    password
                }
            );

            localStorage.setItem(
                "user",
                JSON.stringify(response.data)
            );

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
                            <span className="mini-badge">Welcome Back</span>
                            <h2>Sign in to continue</h2>
                            <p>
                                Access your dashboard, opportunities, and AI
                                career workflow.
                            </p>
                        </div>

                        <div className="login-form">
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

                            <button className="login-btn" onClick={handleLogin}>
                                Continue to Dashboard
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;