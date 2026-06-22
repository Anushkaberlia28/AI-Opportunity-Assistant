// import "../styles/Dashboard.css";
// import Sidebar from "../components/Sidebar";
// import { useState, useEffect } from "react";
// import axios from "axios";

// function Dashboard() {
//     const user = JSON.parse(localStorage.getItem("user"));

//     const [opportunities, setOpportunities] = useState([]);
//     const [searchTerm, setSearchTerm] = useState("");
//     const [selectedCompany, setSelectedCompany] = useState("All Companies");
//     const [selectedLocation, setSelectedLocation] = useState("All Locations");

//     useEffect(() => {
//         fetchOpportunities();
//     }, []);

//     const fetchOpportunities = async () => {
//         try {
//             const response = await axios.get(
//                 "http://localhost:5001/api/opportunities"
//             );
//             setOpportunities(response.data);
//         } catch (error) {
//             console.log("Error fetching opportunities:", error);
//         }
//     };

//     const handleDeleteOpportunity = async (id) => {
//         try {
//             const confirmDelete = window.confirm(
//                 "Are you sure you want to delete this opportunity?"
//             );

//             if (!confirmDelete) {
//                 return;
//             }

//             await axios.delete(`http://localhost:5001/api/opportunities/${id}`);

//             setOpportunities((prevOpportunities) =>
//                 prevOpportunities.filter(
//                     (opportunity) => opportunity._id !== id
//                 )
//             );

//             alert("Opportunity deleted successfully");
//         } catch (error) {
//             console.log("Error deleting opportunity:", error);
//             alert("Failed to delete opportunity");
//         }
//     };

//     const companyOptions = [
//         "All Companies",
//         ...new Set(opportunities.map((opportunity) => opportunity.company))
//     ];

//     const locationOptions = [
//         "All Locations",
//         ...new Set(opportunities.map((opportunity) => opportunity.location))
//     ];

//     const filteredOpportunities = opportunities.filter((opportunity) => {
//         const matchesSearch =
//             opportunity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             opportunity.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             opportunity.location.toLowerCase().includes(searchTerm.toLowerCase());

//         const matchesCompany =
//             selectedCompany === "All Companies" ||
//             opportunity.company === selectedCompany;

//         const matchesLocation =
//             selectedLocation === "All Locations" ||
//             opportunity.location === selectedLocation;

//         return matchesSearch && matchesCompany && matchesLocation;
//     });

//     return (
//         <div className="layout">
//             <Sidebar />

//             <div className="dashboard">
//                 <div className="dashboard-badge">Dashboard Overview</div>

//                 <h1 className="dashboard-title">
//                     Welcome back, {user?.name || "Anushka"} 👋
//                 </h1>

//                 <p className="dashboard-subtitle">
//                     Track your opportunities, deadlines, applications, and upcoming
//                     career moves from one smart workspace.
//                 </p>

//                 <div className="cards">
//                     <div className="card">
//                         <div className="card-icon purple">💼</div>
//                         <div>
//                             <h3>Total Opportunities</h3>
//                             <p>{opportunities.length}</p>
//                         </div>
//                     </div>

//                     <div className="card">
//                         <div className="card-icon blue">📄</div>
//                         <div>
//                             <h3>Applications Submitted</h3>
//                             <p>8</p>
//                         </div>
//                     </div>

//                     <div className="card">
//                         <div className="card-icon red">⏰</div>
//                         <div>
//                             <h3>Upcoming Deadlines</h3>
//                             <p>5</p>
//                         </div>
//                     </div>

//                     <div className="card">
//                         <div className="card-icon green">✨</div>
//                         <div>
//                             <h3>AI Matches</h3>
//                             <p>12</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="filters-row">
//                     <input
//                         type="text"
//                         placeholder="Search by title, company or location..."
//                         className="search-input"
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                     />

//                     <select
//                         className="filter-select"
//                         value={selectedCompany}
//                         onChange={(e) => setSelectedCompany(e.target.value)}
//                     >
//                         {companyOptions.map((company, index) => (
//                             <option key={index} value={company}>
//                                 {company}
//                             </option>
//                         ))}
//                     </select>

//                     <select
//                         className="filter-select"
//                         value={selectedLocation}
//                         onChange={(e) => setSelectedLocation(e.target.value)}
//                     >
//                         {locationOptions.map((location, index) => (
//                             <option key={index} value={location}>
//                                 {location}
//                             </option>
//                         ))}
//                     </select>
//                 </div>

//                 <div className="section">
//                     <h2>Recent Opportunities</h2>
//                     <p className="section-subtitle">
//                         Browse and manage the latest opportunities added to your platform.
//                     </p>

//                     {filteredOpportunities.length > 0 ? (
//                         filteredOpportunities.map((opportunity) => (
//                             <div className="opportunity-card" key={opportunity._id}>
//                                 <div className="opportunity-top">
//                                     <div className="opportunity-heading">
//                                         <h3 className="opportunity-title">
//                                             {opportunity.title}
//                                         </h3>
//                                         <span className="status-badge active">
//                                             Active
//                                         </span>
//                                     </div>
//                                 </div>

//                                 <div className="opportunity-details">
//                                     <p>
//                                         <strong>Company:</strong> {opportunity.company}
//                                     </p>

//                                     <p>
//                                         <strong>Location:</strong> {opportunity.location}
//                                     </p>

//                                     <p>
//                                         <strong>Deadline:</strong>{" "}
//                                         {new Date(opportunity.deadline).toLocaleDateString(
//                                             "en-GB"
//                                         )}
//                                     </p>

//                                     <p>
//                                         <strong>Skills:</strong>{" "}
//                                         {Array.isArray(opportunity.skills)
//                                             ? opportunity.skills.join(", ")
//                                             : opportunity.skills}
//                                     </p>
//                                 </div>

//                                 <div className="opportunity-actions">
//                                     <button
//                                         className="delete-btn"
//                                         onClick={() =>
//                                             handleDeleteOpportunity(opportunity._id)
//                                         }
//                                     >
//                                         🗑 Delete
//                                     </button>
//                                 </div>
//                             </div>
//                         ))
//                     ) : (
//                         <div className="empty-state">
//                             <h3>No opportunities found</h3>
//                             <p>Try changing the search or filter options.</p>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Dashboard;
import "../styles/Dashboard.css";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {
    const user = JSON.parse(localStorage.getItem("user"));

    const [opportunities, setOpportunities] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCompany, setSelectedCompany] = useState("All Companies");
    const [selectedLocation, setSelectedLocation] = useState("All Locations");
    const [isDeleting, setIsDeleting] = useState(null);

    useEffect(() => {
        fetchOpportunities();
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

    const handleDeleteOpportunity = async (id) => {
        try {
            const confirmDelete = window.confirm(
                "Are you sure you want to delete this opportunity?"
            );

            if (!confirmDelete) return;

            setIsDeleting(id);

            await axios.delete(`http://localhost:5001/api/opportunities/${id}`);

            setOpportunities((prevOpportunities) =>
                prevOpportunities.filter(
                    (opportunity) => opportunity._id !== id
                )
            );

            setIsDeleting(null);
            alert("Opportunity deleted successfully");
        } catch (error) {
            console.log("Error deleting opportunity:", error);
            setIsDeleting(null);
            alert("Failed to delete opportunity");
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

    return (
        <div className="layout">
            <Sidebar />

            <main className="dashboard">
                <div className="dashboard-badge">Dashboard Overview</div>

                <h1 className="dashboard-title">
                    Welcome back, {user?.name || "Anushka"} 👋
                </h1>

                <p className="dashboard-subtitle">
                    Track your opportunities, deadlines, applications, and upcoming
                    career moves from one smart workspace.
                </p>

                {/* TOP CARDS */}
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
                            <p>8</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-icon red">⏰</div>
                        <div>
                            <h3>Upcoming Deadlines</h3>
                            <p>5</p>
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

                {/* FILTER BAR */}
                <div className="filters-wrapper">
                    <div className="filters-header">
                        <div>
                            <h2>Find Opportunities</h2>
                            <p>
                                Search through your opportunities by title, company,
                                or location.
                            </p>
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
                </div>

                {/* OPPORTUNITIES SECTION */}
                <section className="section">
                    <div className="section-top">
                        <div>
                            <h2>Recent Opportunities</h2>
                            <p className="section-subtitle">
                                Browse and manage the latest opportunities added to
                                your platform.
                            </p>
                        </div>

                        <div className="opportunity-count">
                            {filteredOpportunities.length} result
                            {filteredOpportunities.length !== 1 ? "s" : ""}
                        </div>
                    </div>

                    {filteredOpportunities.length > 0 ? (
                        <div className="opportunities-list">
                            {filteredOpportunities.map((opportunity) => (
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

                                    <div className="opportunity-grid">
                                        <div className="detail-box">
                                            <span className="detail-label">
                                                Company
                                            </span>
                                            <p>{opportunity.company}</p>
                                        </div>

                                        <div className="detail-box">
                                            <span className="detail-label">
                                                Location
                                            </span>
                                            <p>{opportunity.location}</p>
                                        </div>

                                        <div className="detail-box">
                                            <span className="detail-label">
                                                Deadline
                                            </span>
                                            <p>
                                                {opportunity.deadline
                                                    ? new Date(
                                                        opportunity.deadline
                                                    ).toLocaleDateString(
                                                        "en-GB"
                                                    )
                                                    : "Not available"}
                                            </p>
                                        </div>

                                        <div className="detail-box">
                                            <span className="detail-label">
                                                Skills
                                            </span>
                                            <p>
                                                {Array.isArray(opportunity.skills) &&
                                                    opportunity.skills.length > 0
                                                    ? opportunity.skills.join(", ")
                                                    : "No skills added"}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="opportunity-actions">
                                        <button
                                            className="delete-btn"
                                            onClick={() =>
                                                handleDeleteOpportunity(
                                                    opportunity._id
                                                )
                                            }
                                            disabled={isDeleting === opportunity._id}
                                        >
                                            {isDeleting === opportunity._id
                                                ? "Deleting..."
                                                : "🗑 Delete"}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="empty-state">
                            <h3>No opportunities found</h3>
                            <p>Try changing the search or filter options.</p>
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
}

export default Dashboard;