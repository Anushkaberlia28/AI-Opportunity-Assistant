import { Link, useLocation, useNavigate } from "react-router-dom";
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
                <div className="sidebar-logo">
                    <div className="logo-icon">AI</div>

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

                    <div className="sidebar-link muted">
                        <span className="sidebar-emoji">📋</span>
                        Resume
                    </div>

                    <div className="sidebar-link muted">
                        <span className="sidebar-emoji">👤</span>
                        Profile
                    </div>
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