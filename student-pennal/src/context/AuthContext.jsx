// // context/AuthContext.jsx
// import { createContext, useContext, useEffect, useState, useMemo } from "react";
// import { useAuthMe } from "../hooks/api/useAuthMe";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const { getMe } = useAuthMe();
//   const [auth, setAuth] = useState({
//     user: null,
//     loggedIn: false,
//     loading: true,
//   });

//   // ✅ Initial load pe ek baar check karo
//   useEffect(() => {
//     getMe()
//       .then((res) => {
//         console.log("✅ getMe response:", res); // API response
     
//         // ✅ loggedIn sirf tab true hoga jab API ne true bheja ho
//         setAuth({
//           user: res.user || null,
//           loggedIn: res.loggedIn === true, // strictly check karo
//           loading: false,
//         });
//       })
//       .catch((error) => {
//         console.log("❌ getMe error:", error);
//         setAuth({
//           user: null,
//           loggedIn: false,
//           loading: false,
//         });
//       });
//   }, []);

//   // ✅ Jab bhi auth change ho, console me print karo
//   useEffect(() => {
//     console.log("🔄 Auth State Updated:", {
//       user: auth.user,
//       loggedIn: auth.loggedIn,
//       loading: auth.loading,
//       role: auth.user?.role,
//     });
//   }, [auth]); // auth change hone pe trigger hoga

//   const value = useMemo(() => ({ auth, setAuth }), [auth]);

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within AuthProvider");
//   }
//   return context;
// };

import { createContext, useContext, useEffect, useState, useMemo } from "react";
import { useAuthMe } from "../hooks/api/useAuthMe";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { getMe } = useAuthMe();

  const [auth, setAuth] = useState({
    user: null,
    loggedIn: false,
    loading: true,
  });

  // ✅ Initial auth check
  useEffect(() => {
    getMe()
      .then((res) => {
        setAuth({
          user: res.user || null,
          loggedIn: res.loggedIn === true,
          loading: false,
        });
      })
      .catch(() => {
        setAuth({
          user: null,
          loggedIn: false,
          loading: false,
        });
      });
  }, []);

  // 🔥 LOGOUT FUNCTION (MOST IMPORTANT)
  const logout = () => {
    setAuth({
      user: null,
      loggedIn: false,
      loading: false,
    });
  };

  const value = useMemo(
    () => ({ auth, setAuth, logout }),
    [auth]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
