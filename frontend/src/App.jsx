// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import ProtectedRoute from "./components/ProtectedRoute";
// import AddOpportunity from "./pages/AddOpportunity";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>

//         <Route
//           path="/"
//           element={<Login />}
//         />

//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute>
//               <Dashboard />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/add-opportunity"
//           element={
//             <ProtectedRoute>
//               <AddOpportunity />
//             </ProtectedRoute>
//           }
//         />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddOpportunity from "./pages/AddOpportunity";
import Applications from "./pages/Applications";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import Resume from "./pages/Resume";
import Assistant from "./pages/Assistant";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-opportunity"
          element={
            <ProtectedRoute>
              <AddOpportunity />
            </ProtectedRoute>
          }
        />

        <Route
          path="/applications"
          element={
            <ProtectedRoute>
              <Applications />
            </ProtectedRoute>
          }
        />
        <Route
          path="/resume"
          element={
            <ProtectedRoute>
              <Resume />
            </ProtectedRoute>
          }
        />
        <Route
          path="/assistant"
          element={
            <ProtectedRoute>
              <Assistant />
            </ProtectedRoute>
          }
        />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;