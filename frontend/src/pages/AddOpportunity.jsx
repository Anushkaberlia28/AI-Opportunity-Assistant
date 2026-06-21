import { useState } from "react";
import axios from "axios";

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
                    skills: skills.split(",")
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
        <div style={{ padding: "30px" }}>

            <h1>Add Opportunity</h1>

            <input
                type="text"
                placeholder="Opportunity Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <br /><br />

            <input
                type="text"
                placeholder="Company Name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
            />
            <br /><br />

            <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <br /><br />

            <input
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
            />
            <br /><br />

            <input
                type="text"
                placeholder="Skills (comma separated)"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
            />
            <br /><br />

            <button onClick={handleAddOpportunity}>
                Add Opportunity
            </button>

        </div>
    );
}

export default AddOpportunity;