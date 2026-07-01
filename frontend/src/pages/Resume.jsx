import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import PageNavigator from "../components/PageNavigator";
import "../styles/Resume.css";

function Resume() {
    const storedUser = JSON.parse(localStorage.getItem("user")) || {};
    const user = storedUser?.user || storedUser;

    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
        summary: "",
        college: "",
        degree: "",
        graduation: "",
        skills: "",
        experienceTitle: "",
        experienceCompany: "",
        experiencePeriod: "",
        experienceDescription: "",
        projectTitle: "",
        projectDescription: ""
    });

    useEffect(() => {
        setForm((prev) => ({
            ...prev,
            fullName: user?.name || prev.fullName,
            email: user?.email || prev.email,
            college: user?.college || prev.college,
            degree: user?.branch || prev.degree,
            skills: (user?.skills || []).join(", ") || prev.skills
        }));
    }, [user?.name, user?.email, user?.college, user?.branch, user?.skills]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const downloadResume = () => {
        const resumeContent = [
            form.fullName || "Your Name",
            form.email || "your@email.com",
            form.phone ? `Phone: ${form.phone}` : "",
            "",
            "Professional Summary",
            form.summary || "Add a short summary about your skills and career goals.",
            "",
            "Education",
            form.college || "Your College",
            `${form.degree || "Your Degree"}${form.graduation ? ` | ${form.graduation}` : ""}`,
            "",
            "Skills",
            form.skills || "Add relevant skills",
            "",
            "Experience",
            `${form.experienceTitle || "Role"}${form.experienceCompany ? ` at ${form.experienceCompany}` : ""}${form.experiencePeriod ? ` | ${form.experiencePeriod}` : ""}`,
            form.experienceDescription || "Mention your achievements and responsibilities.",
            "",
            "Projects",
            form.projectTitle || "Project Name",
            form.projectDescription || "Describe the project and your impact."
        ].filter(Boolean).join("\n");

        const blob = new Blob([resumeContent], { type: "text/plain;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "resume.txt";
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="resume-layout">
            <Sidebar />

            <div className="resume-page">
                <div className="resume-wrapper">
                    <PageNavigator />
                    <div className="resume-header-row">
                        <div className="resume-header">
                            <span className="page-badge">Resume Builder</span>
                            <h1>Build a polished resume file</h1>
                            <p>
                                Fill in your details, preview the content instantly,
                                and download a clean resume file for your applications.
                            </p>
                        </div>
                    </div>

                    <div className="resume-grid">
                        <div className="resume-card">
                            <div className="resume-section-title">Resume Details</div>

                            <div className="resume-form-grid">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input
                                        name="fullName"
                                        value={form.fullName}
                                        onChange={handleChange}
                                        placeholder="Your full name"
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Phone</label>
                                    <input
                                        name="phone"
                                        value={form.phone}
                                        onChange={handleChange}
                                        placeholder="Phone number"
                                    />
                                </div>

                                <div className="form-group full-width">
                                    <label>Professional Summary</label>
                                    <textarea
                                        name="summary"
                                        value={form.summary}
                                        onChange={handleChange}
                                        rows="3"
                                        placeholder="Describe your strengths and career goals"
                                    />
                                </div>

                                <div className="form-group">
                                    <label>College</label>
                                    <input
                                        name="college"
                                        value={form.college}
                                        onChange={handleChange}
                                        placeholder="College / University"
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Degree</label>
                                    <input
                                        name="degree"
                                        value={form.degree}
                                        onChange={handleChange}
                                        placeholder="B.Tech / B.Sc / etc."
                                    />
                                </div>

                                <div className="form-group full-width">
                                    <label>Graduation Year</label>
                                    <input
                                        name="graduation"
                                        value={form.graduation}
                                        onChange={handleChange}
                                        placeholder="2026"
                                    />
                                </div>

                                <div className="form-group full-width">
                                    <label>Skills</label>
                                    <input
                                        name="skills"
                                        value={form.skills}
                                        onChange={handleChange}
                                        placeholder="React, Node.js, SQL"
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Experience Title</label>
                                    <input
                                        name="experienceTitle"
                                        value={form.experienceTitle}
                                        onChange={handleChange}
                                        placeholder="Software Intern"
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Company</label>
                                    <input
                                        name="experienceCompany"
                                        value={form.experienceCompany}
                                        onChange={handleChange}
                                        placeholder="Company Name"
                                    />
                                </div>

                                <div className="form-group full-width">
                                    <label>Experience Period</label>
                                    <input
                                        name="experiencePeriod"
                                        value={form.experiencePeriod}
                                        onChange={handleChange}
                                        placeholder="Jan 2025 - Jun 2025"
                                    />
                                </div>

                                <div className="form-group full-width">
                                    <label>Experience Description</label>
                                    <textarea
                                        name="experienceDescription"
                                        value={form.experienceDescription}
                                        onChange={handleChange}
                                        rows="3"
                                        placeholder="Describe your experience and impact"
                                    />
                                </div>

                                <div className="form-group full-width">
                                    <label>Project Title</label>
                                    <input
                                        name="projectTitle"
                                        value={form.projectTitle}
                                        onChange={handleChange}
                                        placeholder="AI Opportunity Assistant"
                                    />
                                </div>

                                <div className="form-group full-width">
                                    <label>Project Description</label>
                                    <textarea
                                        name="projectDescription"
                                        value={form.projectDescription}
                                        onChange={handleChange}
                                        rows="3"
                                        placeholder="Highlight your contribution and results"
                                    />
                                </div>
                            </div>

                            <div className="resume-actions">
                                <button className="download-btn" onClick={downloadResume}>
                                    Download Resume File
                                </button>
                            </div>
                        </div>

                        <div className="resume-preview-card">
                            <div className="resume-preview-header">
                                <h3>{form.fullName || "Your Name"}</h3>
                                <p>{form.email || "your@email.com"}</p>
                                <span>{form.phone || "Add your phone number"}</span>
                            </div>

                            <div className="preview-section">
                                <h4>Professional Summary</h4>
                                <p>{form.summary || "Add a short summary about your strengths and goals."}</p>
                            </div>

                            <div className="preview-section">
                                <h4>Education</h4>
                                <p><strong>{form.college || "Your College"}</strong></p>
                                <p>{form.degree || "Your Degree"}</p>
                                <p>{form.graduation || "Graduation year"}</p>
                            </div>

                            <div className="preview-section">
                                <h4>Skills</h4>
                                <p>{form.skills || "React, Node.js, SQL"}</p>
                            </div>

                            <div className="preview-section">
                                <h4>Experience</h4>
                                <p><strong>{form.experienceTitle || "Role"}</strong></p>
                                <p>{form.experienceCompany || "Company Name"}</p>
                                <p>{form.experiencePeriod || "Dates"}</p>
                                <p>{form.experienceDescription || "Describe your impact here."}</p>
                            </div>

                            <div className="preview-section">
                                <h4>Project</h4>
                                <p><strong>{form.projectTitle || "Project"}</strong></p>
                                <p>{form.projectDescription || "Describe your project and results here."}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;
