// import "../styles/Dashboard.css";
// import Sidebar from "../components/Sidebar";

// function Dashboard() {
//     return (
//         <div className="layout">

//             <Sidebar />

//             <div className="dashboard">

//                 <h1>Welcome, Anushka 👋</h1>

//                 <div className="cards">

//                     <div className="card">
//                         <h3>Total Opportunities</h3>
//                         <p>24</p>
//                     </div>

//                     <div className="card">
//                         <h3>Applications Submitted</h3>
//                         <p>8</p>
//                     </div>

//                     <div className="card">
//                         <h3>Upcoming Deadlines</h3>
//                         <p>5</p>
//                     </div>

//                     <div className="card">
//                         <h3>AI Matches</h3>
//                         <p>12</p>
//                     </div>

//                 </div>

//                 <div className="section">

//                     <h2>Recent Opportunities</h2>

//                     <div className="opportunity-card">
//                         <h3>Google Software Engineering Internship</h3>
//                         <p>Location: Bengaluru</p>
//                     </div>

//                     <div className="opportunity-card">
//                         <h3>Microsoft Explore Program</h3>
//                         <p>Location: Hyderabad</p>
//                     </div>

//                     <div className="opportunity-card">
//                         <h3>Amazon ML Internship</h3>
//                         <p>Location: Remote</p>
//                     </div>

//                 </div>

//             </div>

//         </div>
//     );
// }

// export default Dashboard;

import "../styles/Dashboard.css";
import Sidebar from "../components/Sidebar";

function Dashboard() {

    const user = JSON.parse(
        localStorage.getItem("user")
    );

    return (
        <div className="layout">

            <Sidebar />

            <div className="dashboard">

                <h1>
                    Welcome, {user?.name} 👋
                </h1>

                <div className="cards">

                    <div className="card">
                        <h3>Total Opportunities</h3>
                        <p>24</p>
                    </div>

                    <div className="card">
                        <h3>Applications Submitted</h3>
                        <p>8</p>
                    </div>

                    <div className="card">
                        <h3>Upcoming Deadlines</h3>
                        <p>5</p>
                    </div>

                    <div className="card">
                        <h3>AI Matches</h3>
                        <p>12</p>
                    </div>

                </div>

                <div className="section">

                    <h2>Recent Opportunities</h2>

                    <div className="opportunity-card">
                        <h3>Google Software Engineering Internship</h3>
                        <p>Location: Bengaluru</p>
                    </div>

                    <div className="opportunity-card">
                        <h3>Microsoft Explore Program</h3>
                        <p>Location: Hyderabad</p>
                    </div>

                    <div className="opportunity-card">
                        <h3>Amazon ML Internship</h3>
                        <p>Location: Remote</p>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Dashboard;