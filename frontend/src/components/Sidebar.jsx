import { Link, useLocation, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import "../styles/Sidebar.css";

function Sidebar() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/");
    };

    return (
        <aside className="sidebar">
            <div className="sidebar-top">
                <ThemeToggle />
                <div className="sidebar-logo">
                    <div className="logo-icon" aria-label="AI assistant logo">
                        <span className="logo-icon-core">AI</span>
                    </div>

                    <div className="logo-text">
                        <h2>Opportunity</h2>
                        <p>Assistant Plan</p>
                    </div>
                </div>

                <nav className="sidebar-nav">
                    <Link
                        to="/dashboard"
                        className={
                            location.pathname === "/dashboard"
                                ? "sidebar-link active"
                                : "sidebar-link"
                        }
                    >
                        <span className="sidebar-emoji">🏠</span>
                        Dashboard
                    </Link>

                    <Link
                        to="/add-opportunity"
                        className={
                            location.pathname === "/add-opportunity"
                                ? "sidebar-link active"
                                : "sidebar-link"
                        }
                    >
                        <span className="sidebar-emoji">➕</span>
                        Add Opportunity
                    </Link>

                    <Link
                        to="/applications"
                        className={
                            location.pathname === "/applications"
                                ? "sidebar-link active"
                                : "sidebar-link"
                        }
                    >
                        <span className="sidebar-emoji">📄</span>
                        Applications
                    </Link>

                    <Link
                        to="/resume"
                        className={
                            location.pathname === "/resume"
                                ? "sidebar-link active"
                                : "sidebar-link"
                        }
                    >
                        <span className="sidebar-emoji">📋</span>
                        Resume
                    </Link>

                    <Link
                        to="/assistant"
                        className={
                            location.pathname === "/assistant"
                                ? "sidebar-link active"
                                : "sidebar-link"
                        }
                    >
                        <span className="sidebar-emoji">🤖</span>
                        Assistant
                    </Link>

                    <Link to="/profile" className="sidebar-link">

                        <span className="sidebar-emoji">
                            👤
                        </span>

                        Profile

                    </Link>
                </nav>
            </div>

            <div className="sidebar-bottom">
                <button className="logout-btn" onClick={handleLogout}>
                    🚪 Logout
                </button>
            </div>
        </aside>
    );
}

export default Sidebar;