import { Route, Routes, Navigate } from "react-router-dom";

// Public Layout & Pages
import Home from "./pages/home/Home";
import HomeLayout from "./layout/HomeLayout";
import { useState } from "react";
// import Login from "./pages/auth/Login";

// Admin Layout & Pages
// import AdminLayout from "./layout/admin/AdminLayout";
// import AdminDashboard from "./pages/admin/AdminDashboard";

// Normal User Layout & Pages (optional, same as public or custom)
// import UserLayout from "./layout/UserLayout";
// import UserDashboard from "./pages/user/UserDashboard";

const App = () => {
  // Hardcoded users for testing
  // const [user, setUser] = useState({
  //   name: "Yogesh Kumar",
  //   role: "user", // change to "admin" to test admin
  // });
  const [user, setUser] = useState(null); // ab HomeLayout dikhega


  const [loading, setLoading] = useState(false);

  const isAuthenticated = !!user;
  const isAdmin = user?.role === "admin";
  // const isUser = user?.role === "user";

  if (loading) return <div>Loading...</div>;

  return (
    <Routes>
      {/* Public Routes */}
      <Route
        path="/"
        element={
          !isAuthenticated ? <HomeLayout /> : isAdmin ? <Navigate to="/admin" replace /> : <Navigate to="/user" replace />
        }
      >
        <Route index element={<Home />} />
        {/* <Route
          path="login"
          element={isAuthenticated ? (isAdmin ? <Navigate to="/admin" replace /> : <Navigate to="/user" replace />) : <Login />}
        /> */}
        {/* Add other public pages here */}
      </Route>

      {/* Admin Routes */}
      {/* <Route
        path="/admin"
        element={
          isAuthenticated && isAdmin ? <AdminLayout /> : <Navigate to="/login" replace />
        }
      >
        <Route index element={<AdminDashboard />} />

      </Route> */}

      {/* Normal User Routes */}
      {/* <Route
        path="/user"
        element={
          isAuthenticated && isUser ? <UserLayout /> : <Navigate to="/login" replace />
        }
      >
        <Route index element={<UserDashboard />} />
 
      </Route> */}

      {/* Fallback Route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
