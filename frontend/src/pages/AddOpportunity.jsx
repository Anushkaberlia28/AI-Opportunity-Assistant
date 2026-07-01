// // import { useState } from "react";
// // import axios from "axios";

// // function AddOpportunity() {

// //     const [title, setTitle] = useState("");
// //     const [company, setCompany] = useState("");
// //     const [location, setLocation] = useState("");
// //     const [deadline, setDeadline] = useState("");
// //     const [skills, setSkills] = useState("");

// //     const handleAddOpportunity = async () => {

// //         try {

// //             const response = await axios.post(
// //                 "http://localhost:5001/api/opportunities",
// //                 {
// //                     title,
// //                     company,
// //                     location,
// //                     deadline,
// //                     skills: skills.split(",")
// //                 }
// //             );

// //             alert("Opportunity Added Successfully");

// //             setTitle("");
// //             setCompany("");
// //             setLocation("");
// //             setDeadline("");
// //             setSkills("");

// //             console.log(response.data);

// //         } catch (error) {

// //             console.log(error);
// //             alert("Failed to add opportunity");

// //         }
// //     };

// //     return (
// //         <div style={{ padding: "30px" }}>

// //             <h1>Add Opportunity</h1>

// //             <input
// //                 type="text"
// //                 placeholder="Opportunity Title"
// //                 value={title}
// //                 onChange={(e) => setTitle(e.target.value)}
// //             />
// //             <br /><br />

// //             <input
// //                 type="text"
// //                 placeholder="Company Name"
// //                 value={company}
// //                 onChange={(e) => setCompany(e.target.value)}
// //             />
// //             <br /><br />

// //             <input
// //                 type="text"
// //                 placeholder="Location"
// //                 value={location}
// //                 onChange={(e) => setLocation(e.target.value)}
// //             />
// //             <br /><br />

// //             <input
// //                 type="date"
// //                 value={deadline}
// //                 onChange={(e) => setDeadline(e.target.value)}
// //             />
// //             <br /><br />

// //             <input
// //                 type="text"
// //                 placeholder="Skills (comma separated)"
// //                 value={skills}
// //                 onChange={(e) => setSkills(e.target.value)}
// //             />
// //             <br /><br />

// //             <button onClick={handleAddOpportunity}>
// //                 Add Opportunity
// //             </button>

// //         </div>
// //     );
// // }

// // export default AddOpportunity;


// import { useState } from "react";
// import axios from "axios";
// import Sidebar from "../components/Sidebar";
// import "../styles/AddOpportunity.css";

// function AddOpportunity() {
//     const [title, setTitle] = useState("");
//     const [company, setCompany] = useState("");
//     const [location, setLocation] = useState("");
//     const [deadline, setDeadline] = useState("");
//     const [skills, setSkills] = useState("");

//     const handleAddOpportunity = async () => {
//         try {
//             const response = await axios.post(
//                 "http://localhost:5001/api/opportunities",
//                 {
//                     title,
//                     company,
//                     location,
//                     deadline,
//                     skills: skills
//                         .split(",")
//                         .map((skill) => skill.trim())
//                         .filter((skill) => skill !== "")
//                 }
//             );

//             alert("Opportunity Added Successfully");

//             setTitle("");
//             setCompany("");
//             setLocation("");
//             setDeadline("");
//             setSkills("");

//             console.log(response.data);
//         } catch (error) {
//             console.log(error);
//             alert("Failed to add opportunity");
//         }
//     };

//     return (
//         <div className="layout">
//             <Sidebar />

//             <div className="add-opportunity-page">
//                 <div className="add-opportunity-wrapper">
//                     <div className="add-opportunity-header">
//                         <span className="page-badge">
//                             Opportunity Management
//                         </span>

//                         <h1>Add a New Opportunity</h1>

//                         <p>
//                             Create and manage internships, jobs, hackathons,
//                             scholarships, and career opportunities from one
//                             place.
//                         </p>
//                     </div>

//                     <div className="add-opportunity-card">
//                         <div className="form-grid">
//                             <div className="form-group full-width">
//                                 <label>Opportunity Title</label>
//                                 <input
//                                     type="text"
//                                     placeholder="e.g. Frontend Developer Intern"
//                                     value={title}
//                                     onChange={(e) =>
//                                         setTitle(e.target.value)
//                                     }
//                                 />
//                             </div>

//                             <div className="form-group">
//                                 <label>Company Name</label>
//                                 <input
//                                     type="text"
//                                     placeholder="e.g. Google"
//                                     value={company}
//                                     onChange={(e) =>
//                                         setCompany(e.target.value)
//                                     }
//                                 />
//                             </div>

//                             <div className="form-group">
//                                 <label>Location</label>
//                                 <input
//                                     type="text"
//                                     placeholder="e.g. Bengaluru / Remote"
//                                     value={location}
//                                     onChange={(e) =>
//                                         setLocation(e.target.value)
//                                     }
//                                 />
//                             </div>

//                             <div className="form-group">
//                                 <label>Application Deadline</label>
//                                 <input
//                                     type="date"
//                                     value={deadline}
//                                     onChange={(e) =>
//                                         setDeadline(e.target.value)
//                                     }
//                                 />
//                             </div>

//                             <div className="form-group full-width">
//                                 <label>Required Skills</label>
//                                 <input
//                                     type="text"
//                                     placeholder="React, Node.js, MongoDB, UI/UX"
//                                     value={skills}
//                                     onChange={(e) =>
//                                         setSkills(e.target.value)
//                                     }
//                                 />
//                                 <small>
//                                     Add multiple skills separated by commas.
//                                 </small>
//                             </div>
//                         </div>

//                         <div className="add-opportunity-actions">
//                             <button
//                                 className="add-btn"
//                                 onClick={handleAddOpportunity}
//                             >
//                                 + Add Opportunity
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default AddOpportunity;

import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import PageNavigator from "../components/PageNavigator";
import "../styles/AddOpportunity.css";

function AddOpportunity() {
    const [title, setTitle] = useState("");
    const [company, setCompany] = useState("");
    const [location, setLocation] = useState("");
    const [deadline, setDeadline] = useState("");
    const [skills, setSkills] = useState("");
    const [liveOpportunities, setLiveOpportunities] = useState([]);
    const [liveMessage, setLiveMessage] = useState("Loading live internship and job data...");
    const [loadingLiveData, setLoadingLiveData] = useState(false);

    const fallbackLiveData = [
        {
            title: "Software Engineering Intern",
            company: "OpenAI",
            location: "Remote",
            deadline: "2026-07-20",
            skills: ["React", "Node.js", "APIs"]
        },
        {
            title: "Data Analyst Intern",
            company: "Google",
            location: "Bengaluru",
            deadline: "2026-07-18",
            skills: ["SQL", "Python", "Tableau"]
        },
        {
            title: "Product Design Intern",
            company: "Adobe",
            location: "Hyderabad",
            deadline: "2026-07-25",
            skills: ["Figma", "User Research", "UI Design"]
        }
    ];

    const fetchLiveOpportunities = async () => {
        setLoadingLiveData(true);
        setLiveMessage("Fetching fresh internship and job opportunities...");

        try {
            const response = await axios.get(
                "https://www.themuse.com/api/public/jobs?category=Software%20Engineering&page=1"
            );

            const jobs = response.data?.results || response.data || [];
            const normalized = jobs.slice(0, 4).map((job, index) => ({
                title: job.title || job.name || `Opening ${index + 1}`,
                company: job.company?.name || job.company || job.employer_name || "Featured Company",
                location: job.location || job.candidate_required_location || "Remote",
                deadline: job.publication_date || job.posted_at || new Date(Date.now() + 86400000 * (index + 3)).toISOString().split("T")[0],
                skills: Array.isArray(job.categories)
                    ? job.categories
                    : [job.categories || "Software Development"]
            }));

            if (normalized.length > 0) {
                setLiveOpportunities(normalized);
                setLiveMessage("Live opportunities loaded successfully.");
            } else {
                setLiveOpportunities(fallbackLiveData);
                setLiveMessage("No live results were returned, so a sample list is shown instead.");
            }
        } catch (error) {
            console.log("Error fetching live opportunities:", error);
            setLiveOpportunities(fallbackLiveData);
            setLiveMessage("Live data is temporarily unavailable. Showing a curated sample list instead.");
        } finally {
            setLoadingLiveData(false);
        }
    };

    useEffect(() => {
        fetchLiveOpportunities();
    }, []);

    const useLiveOpportunity = (opportunity) => {
        setTitle(opportunity.title);
        setCompany(opportunity.company);
        setLocation(opportunity.location);
        setDeadline(opportunity.deadline);
        setSkills((opportunity.skills || []).join(", "));
        setLiveMessage(`Loaded ${opportunity.title} into the form.`);
    };

    const handleAddOpportunity = async () => {
        try {
            const response = await axios.post(
                "http://localhost:5001/api/opportunities",
                {
                    title,
                    company,
                    location,
                    deadline,
                    skills: skills
                        .split(",")
                        .map((skill) => skill.trim())
                        .filter((skill) => skill !== "")
                }
            );

            alert("Opportunity Added Successfully");

            setTitle("");
            setCompany("");
            setLocation("");
            setDeadline("");
            setSkills("");

            console.log(response.data);
        } catch (error) {
            console.log(error);
            alert("Failed to add opportunity");
        }
    };

    return (
        <div className="layout">
            <Sidebar />

            <div className="add-opportunity-page">
                <div className="add-opportunity-wrapper">
                    <PageNavigator />
                    <div className="add-opportunity-header">
                        <span className="page-badge">
                            Opportunity Management
                        </span>

                        <h1>Add a New Opportunity</h1>

                        <p>
                            Create and manage internships, jobs, hackathons,
                            scholarships, and career opportunities from one
                            place inside your AI-powered workspace.
                        </p>
                    </div>

                    <div className="add-opportunity-card">
                        <div className="live-opportunity-panel">
                            <div className="live-opportunity-header">
                                <h3>Live internship & job suggestions</h3>
                                <span>{loadingLiveData ? "Loading..." : "Ready"}</span>
                            </div>
                            <p>{liveMessage}</p>

                            <div className="live-opportunity-list">
                                {liveOpportunities.map((opportunity, index) => (
                                    <button
                                        key={`${opportunity.title}-${index}`}
                                        className="live-opportunity-item"
                                        onClick={() => useLiveOpportunity(opportunity)}
                                    >
                                        <strong>{opportunity.title}</strong>
                                        <span>{opportunity.company}</span>
                                        <small>
                                            {opportunity.location} • {opportunity.deadline}
                                        </small>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="form-grid">
                            <div className="form-group full-width">
                                <label>Opportunity Title</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Frontend Developer Intern"
                                    value={title}
                                    onChange={(e) =>
                                        setTitle(e.target.value)
                                    }
                                />
                            </div>

                            <div className="form-group">
                                <label>Company Name</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Google"
                                    value={company}
                                    onChange={(e) =>
                                        setCompany(e.target.value)
                                    }
                                />
                            </div>

                            <div className="form-group">
                                <label>Location</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Bengaluru / Remote"
                                    value={location}
                                    onChange={(e) =>
                                        setLocation(e.target.value)
                                    }
                                />
                            </div>

                            <div className="form-group">
                                <label>Application Deadline</label>
                                <input
                                    type="date"
                                    value={deadline}
                                    onChange={(e) =>
                                        setDeadline(e.target.value)
                                    }
                                />
                            </div>

                            <div className="form-group full-width">
                                <label>Required Skills</label>
                                <input
                                    type="text"
                                    placeholder="React, Node.js, MongoDB, UI/UX"
                                    value={skills}
                                    onChange={(e) =>
                                        setSkills(e.target.value)
                                    }
                                />
                                <small>
                                    Add multiple skills separated by commas.
                                </small>
                            </div>
                        </div>

                        <div className="add-opportunity-actions">
                            <button
                                className="add-btn"
                                onClick={handleAddOpportunity}
                            >
                                + Add Opportunity
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddOpportunity;