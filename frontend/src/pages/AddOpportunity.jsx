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

import { useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import "../styles/AddOpportunity.css";

function AddOpportunity() {
    const [title, setTitle] = useState("");
    const [company, setCompany] = useState("");
    const [location, setLocation] = useState("");
    const [deadline, setDeadline] = useState("");
    const [skills, setSkills] = useState("");

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