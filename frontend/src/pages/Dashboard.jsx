import "../styles/Dashboard.css";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {
    const user = JSON.parse(localStorage.getItem("user"));

    const [opportunities, setOpportunities] = useState([]);
    const [applications, setApplications] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCompany, setSelectedCompany] = useState("All Companies");
    const [selectedLocation, setSelectedLocation] = useState("All Locations");

    useEffect(() => {
        fetchOpportunities();
        fetchApplications();
    }, []);

    const fetchOpportunities = async () => {
        try {
            const response = await axios.get(
                "http://localhost:5001/api/opportunities"
            );
            setOpportunities(response.data);
        } catch (error) {
            console.log("Error fetching opportunities:", error);
        }
    };

    const fetchApplications = async () => {
        try {
            const response = await axios.get(
                "http://localhost:5001/api/applications"
            );
            setApplications(response.data);
        } catch (error) {
            console.log("Error fetching applications:", error);
        }
    };

    const handleDeleteOpportunity = async (id) => {
        try {
            const confirmDelete = window.confirm(
                "Are you sure you want to delete this opportunity?"
            );

            if (!confirmDelete) {
                return;
            }

            await axios.delete(`http://localhost:5001/api/opportunities/${id}`);

            setOpportunities((prevOpportunities) =>
                prevOpportunities.filter(
                    (opportunity) => opportunity._id !== id
                )
            );

            alert("Opportunity deleted successfully");
        } catch (error) {
            console.log("Error deleting opportunity:", error);
            alert("Failed to delete opportunity");
        }
    };

    const handleApplyOpportunity = async (opportunity) => {
        try {
            const alreadyApplied = applications.some(
                (application) =>
                    application.opportunityTitle === opportunity.title &&
                    application.company === opportunity.company
            );

            if (alreadyApplied) {
                alert("You have already applied to this opportunity");
                return;
            }

            const response = await axios.post(
                "http://localhost:5001/api/applications",
                {
                    opportunityTitle: opportunity.title,
                    company: opportunity.company,
                    status: "Applied",
                    appliedDate: new Date().toISOString().split("T")[0],
                    notes: ""
                }
            );

            setApplications((prevApplications) => [
                response.data,
                ...prevApplications
            ]);

            alert("Application added successfully");
        } catch (error) {
            console.log("Error applying to opportunity:", error);
            alert("Failed to add application");
        }
    };

    const companyOptions = [
        "All Companies",
        ...new Set(opportunities.map((opportunity) => opportunity.company))
    ];

    const locationOptions = [
        "All Locations",
        ...new Set(opportunities.map((opportunity) => opportunity.location))
    ];

    const filteredOpportunities = opportunities.filter((opportunity) => {
        const matchesSearch =
            opportunity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            opportunity.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
            opportunity.location.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCompany =
            selectedCompany === "All Companies" ||
            opportunity.company === selectedCompany;

        const matchesLocation =
            selectedLocation === "All Locations" ||
            opportunity.location === selectedLocation;

        return matchesSearch && matchesCompany && matchesLocation;
    });

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const upcomingDeadlinesCount = opportunities.filter((opportunity) => {
        const deadlineDate = new Date(opportunity.deadline);
        deadlineDate.setHours(0, 0, 0, 0);
        return deadlineDate >= today;
    }).length;

    return (
        <div className="layout">
            <Sidebar />

            <div className="dashboard">
                <div className="dashboard-badge">Dashboard Overview</div>

                <h1 className="dashboard-title">
                    Welcome back, {user?.name || "Anushka"} 👋
                </h1>

                <p className="dashboard-subtitle">
                    Track your opportunities, deadlines, applications, and upcoming
                    career moves from one smart workspace.
                </p>

                <div className="cards">
                    <div className="card">
                        <div className="card-icon purple">💼</div>
                        <div>
                            <h3>Total Opportunities</h3>
                            <p>{opportunities.length}</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-icon blue">📄</div>
                        <div>
                            <h3>Applications Submitted</h3>
                            <p>{applications.length}</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-icon red">⏰</div>
                        <div>
                            <h3>Upcoming Deadlines</h3>
                            <p>{upcomingDeadlinesCount}</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-icon green">✨</div>
                        <div>
                            <h3>AI Matches</h3>
                            <p>12</p>
                        </div>
                    </div>
                </div>

                <div className="filters-row">
                    <input
                        type="text"
                        placeholder="Search by title, company or location..."
                        className="search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />

                    <select
                        className="filter-select"
                        value={selectedCompany}
                        onChange={(e) => setSelectedCompany(e.target.value)}
                    >
                        {companyOptions.map((company, index) => (
                            <option key={index} value={company}>
                                {company}
                            </option>
                        ))}
                    </select>

                    <select
                        className="filter-select"
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                    >
                        {locationOptions.map((location, index) => (
                            <option key={index} value={location}>
                                {location}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="section">

                    <div className="section-top">
                        <div>
                            <h2>Recent Opportunities</h2>

                            <p className="section-subtitle">
                                Browse and manage the latest opportunities added to your platform.
                            </p>
                        </div>

                        <span className="opportunity-count">
                            {filteredOpportunities.length} Opportunities
                        </span>
                    </div>

                    {filteredOpportunities.length > 0 ? (
                        filteredOpportunities.map((opportunity) => {
                            const alreadyApplied = applications.some(
                                (application) =>
                                    application.opportunityTitle === opportunity.title &&
                                    application.company === opportunity.company
                            );

                            return (
                                <div
                                    className="opportunity-card"
                                    key={opportunity._id}
                                >
                                    <div className="opportunity-top">
                                        <div className="opportunity-heading">
                                            <h3 className="opportunity-title">
                                                {opportunity.title}
                                            </h3>
                                            <span className="status-badge active">
                                                Active
                                            </span>
                                        </div>
                                    </div>

                                    <div className="opportunity-details">
                                        <p>
                                            <strong>Company:</strong> {opportunity.company}
                                        </p>

                                        <p>
                                            <strong>Location:</strong> {opportunity.location}
                                        </p>

                                        <p>
                                            <strong>Deadline:</strong>{" "}
                                            {new Date(opportunity.deadline).toLocaleDateString(
                                                "en-GB"
                                            )}
                                        </p>

                                        <p>
                                            <strong>Skills:</strong>{" "}
                                            {Array.isArray(opportunity.skills)
                                                ? opportunity.skills.join(", ")
                                                : opportunity.skills}
                                        </p>
                                    </div>

                                    <div className="opportunity-actions">
                                        <button
                                            className={`apply-btn ${alreadyApplied ? "applied-btn" : ""
                                                }`}
                                            onClick={() =>
                                                handleApplyOpportunity(opportunity)
                                            }
                                        >
                                            {alreadyApplied ? "Applied" : "Apply"}
                                        </button>

                                        <button
                                            className="delete-btn"
                                            onClick={() =>
                                                handleDeleteOpportunity(opportunity._id)
                                            }
                                        >
                                            🗑 Delete
                                        </button>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="empty-state">
                            <h3>No opportunities found</h3>
                            <p>Try changing the search or filter options.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;