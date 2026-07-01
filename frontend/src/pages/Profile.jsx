import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import PageNavigator from "../components/PageNavigator";
import "../styles/Profile.css";

function Profile() {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const user = storedUser && storedUser._id ? storedUser : storedUser?.user || {};

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [college, setCollege] = useState("");
    const [branch, setBranch] = useState("");
    const [age, setAge] = useState("");
    const [skills, setSkills] = useState("");

    useEffect(() => {
        if (user && user._id) {
            fetchProfile();
        }
    }, [user?._id]);

    const fetchProfile = async () => {
        try {
            const response = await axios.get(
                `http://localhost:5001/api/users/${user._id}`
            );

            setName(response.data.name);
            setEmail(response.data.email);
            setCollege(response.data.college || "");
            setBranch(response.data.branch || "");
            setAge(response.data.age || "");
            setSkills((response.data.skills || []).join(", "));
        } catch (error) {
            console.log(error);
        }
    };

    const saveProfile = async () => {
        try {
            if (!user || !user._id) {
                alert("User not found. Please login again.");
                return;
            }

            const response = await axios.put(
                `http://localhost:5001/api/users/${user._id}`,
                {
                    college,
                    branch,
                    age: Number(age),
                    skills: skills
                        .split(",")
                        .map((skill) => skill.trim())
                        .filter((skill) => skill !== "")
                }
            );

            const updatedUser = {
                ...user,
                ...response.data,
                age: Number(age)
            };

            localStorage.setItem("user", JSON.stringify(updatedUser));
            alert("Profile Updated Successfully");
        } catch (error) {
            console.log(error);
            alert("Unable to update profile");
        }
    };

    return (
        <div className="layout">
            <Sidebar />

            <div className="profile-page">
                <div className="profile-card">
                    <PageNavigator />
                    <span className="page-badge">
                        My Profile
                    </span>

                    <h1>Profile Settings</h1>

                    <p>
                        Manage your personal information that helps AI recommend
                        better opportunities.
                    </p>

                    <div className="form-group">
                        <label>Name</label>
                        <input value={name} readOnly />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input value={email} readOnly />
                    </div>

                    <div className="form-group">
                        <label>Age</label>
                        <input
                            type="number"
                            min="16"
                            max="100"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>College</label>
                        <input
                            value={college}
                            onChange={(e) => setCollege(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Branch</label>
                        <input
                            value={branch}
                            onChange={(e) => setBranch(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Skills</label>
                        <input
                            value={skills}
                            placeholder="React, Node.js, MongoDB"
                            onChange={(e) => setSkills(e.target.value)}
                        />
                    </div>

                    <button
                        className="save-btn"
                        onClick={saveProfile}
                    >
                        Save Profile
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Profile;