import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import PageNavigator from "../components/PageNavigator";
import "../styles/Applications.css";

function Applications() {
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        fetchApplications();
    }, []);

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

    const handleDeleteApplication = async (id) => {
        try {
            const confirmDelete = window.confirm(
                "Are you sure you want to delete this application?"
            );

            if (!confirmDelete) return;

            await axios.delete(`http://localhost:5001/api/applications/${id}`);

            setApplications((prevApplications) =>
                prevApplications.filter(
                    (application) => application._id !== id
                )
            );

            alert("Application deleted successfully");
        } catch (error) {
            console.log("Error deleting application:", error);
            alert("Failed to delete application");
        }
    };

    const handleStatusChange = async (id, newStatus) => {
        try {
            const response = await axios.patch(
                `http://localhost:5001/api/applications/${id}`,
                {
                    status: newStatus
                }
            );

            setApplications((prevApplications) =>
                prevApplications.map((application) =>
                    application._id === id ? response.data : application
                )
            );
        } catch (error) {
            console.log("Error updating application status:", error);
            alert("Failed to update status");
        }
    };

    const getStatusClass = (status) => {
        if (status === "Applied") return "status-applied";
        if (status === "Interview") return "status-interview";
        if (status === "Rejected") return "status-rejected";
        if (status === "Selected") return "status-selected";
        return "";
    };

    return (
        <div className="layout">
            <Sidebar />

            <div className="applications-page">
                <div className="applications-wrapper">
                    <PageNavigator />
                    <div className="applications-header">
                        <span className="page-badge">Applications Tracker</span>

                        <h1>Your Applications</h1>

                        <p>
                            Track every application, monitor its current status,
                            and manage your placement journey from one premium dashboard.
                        </p>
                    </div>

                    <div className="applications-card">
                        <div className="applications-topbar">
                            <div>
                                <h2>All Applications</h2>
                                <p className="applications-subtext">
                                    View, update and manage all job applications in one place.
                                </p>
                            </div>

                            <span className="applications-count">
                                {applications.length} total
                            </span>
                        </div>

                        {applications.length > 0 ? (
                            <div className="applications-list">
                                {applications.map((application) => (
                                    <div
                                        className="application-item"
                                        key={application._id}
                                    >
                                        <div className="application-item-top">
                                            <div className="application-main-info">
                                                <h3>{application.opportunityTitle}</h3>
                                                <p className="company-name">
                                                    {application.company}
                                                </p>
                                            </div>

                                            <span
                                                className={`application-status ${getStatusClass(
                                                    application.status
                                                )}`}
                                            >
                                                {application.status}
                                            </span>
                                        </div>

                                        <div className="application-details-grid">
                                            <div className="detail-box">
                                                <span className="detail-label">
                                                    Applied Date
                                                </span>
                                                <p>
                                                    {new Date(
                                                        application.appliedDate
                                                    ).toLocaleDateString("en-GB")}
                                                </p>
                                            </div>

                                            <div className="detail-box full-width">
                                                <span className="detail-label">
                                                    Notes
                                                </span>
                                                <p>
                                                    {application.notes?.trim()
                                                        ? application.notes
                                                        : "No notes added"}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="application-footer">
                                            <div className="status-update-box">
                                                <label>Update Status</label>
                                                <select
                                                    value={application.status}
                                                    onChange={(e) =>
                                                        handleStatusChange(
                                                            application._id,
                                                            e.target.value
                                                        )
                                                    }
                                                    className="status-select"
                                                >
                                                    <option value="Applied">
                                                        Applied
                                                    </option>
                                                    <option value="Interview">
                                                        Interview
                                                    </option>
                                                    <option value="Rejected">
                                                        Rejected
                                                    </option>
                                                    <option value="Selected">
                                                        Selected
                                                    </option>
                                                </select>
                                            </div>

                                            <button
                                                className="delete-btn"
                                                onClick={() =>
                                                    handleDeleteApplication(
                                                        application._id
                                                    )
                                                }
                                            >
                                                🗑 Delete
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="empty-state">
                                <h3>No applications added yet</h3>
                                <p>
                                    Once you start applying to opportunities, they will appear here.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Applications;