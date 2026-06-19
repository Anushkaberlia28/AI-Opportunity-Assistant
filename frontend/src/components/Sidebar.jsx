// function Sidebar() {
//     return (
//         <div className="sidebar">

//             <h2>AI Assistant</h2>

//             <ul>
//                 <li>🏠 Dashboard</li>
//                 <li>💼 Opportunities</li>
//                 <li>📄 Applications</li>
//                 <li>📋 Resume</li>
//                 <li>👤 Profile</li>
//             </ul>

//         </div>
//     );
// }

// export default Sidebar;

import { useNavigate } from "react-router-dom";

function Sidebar() {

    const navigate = useNavigate();

    const handleLogout = () => {

        localStorage.removeItem("user");

        navigate("/");
    };

    return (
        <div className="sidebar">

            <h2>AI Assistant</h2>

            <ul>
                <li>🏠 Dashboard</li>
                <li>💼 Opportunities</li>
                <li>📄 Applications</li>
                <li>📋 Resume</li>
                <li>👤 Profile</li>

                <li onClick={handleLogout}>
                    🚪 Logout
                </li>

            </ul>

        </div>
    );
}

export default Sidebar;