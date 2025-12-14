// RequireAuth.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";


const RequireAuth = ({ children }) => {
  const { auth } = useAuth();

  // ✅ Don't render anything during loading (App.jsx handles this)
  if (auth.loading) {
    return null;
  }

  // ✅ Simple redirect check
  if (!auth.loggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default RequireAuth;