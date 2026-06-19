import "../styles/Login.css";
function Login() {
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
                />

                <input
                    type="password"
                    placeholder="Password"
                />

                <button>
                    Continue
                </button>

            </div>

        </div>
    );
}

export default Login;