// App.jsx
import { Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import HomeLayout from "./layout/HomeLayout";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Gallery from "./pages/gallery/Gallery";
import RequireAuth from "./components/common/RequireAuth";
import { useEffect, useRef } from "react";
import Faculty from "./pages/faculty/Faculty";
import AboutUs from "./pages/aboutUs/AboutUs";
import Courses6to8 from "./pages/courses/Courses6to8";
import Courses9to10 from "./pages/courses/Courses9to10";
import Courses11to12 from "./pages/courses/Courses11to12";
import Schedule from "./pages/schedule/Schedule";
import Testimonials from "./pages/testimonials/Testimonials";
import ContactUs from "./pages/contactUs/ContactUs";
import FAQ from "./pages/faq/Faq";
import AdminDashboard from "./pages/Two";
import StudentDashboard1 from "./pages/One";
import OurCoursesLearnMore from "./pages/ourCoursesLearnMore/OurCoursesLearnMore";
import Math from "./components/user/ourCoursesLearnMore/Math";
import Science from "./components/user/ourCoursesLearnMore/Science";
import English from "./components/user/ourCoursesLearnMore/English";
import AllSubjects from "./components/user/ourCoursesLearnMore/AllSubjects";
import Admission from "./pages/admission/Admission";
import AdmissionStatus from "./pages/admission/AdmissionStatus";
import AdmissionConfirm from "./pages/admission/AdmissionConfirm";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/studentDashboard/Dashboard";
import StudentProfileLayout from "./layout/StudentProfileLayout";
import EnrolledCourses from "./pages/studentDashboard/EnrolledCourses";
import StudyMaterial from "./pages/studentDashboard/StudyMaterial";
import MarksAndHistory from "./pages/studentDashboard/MarksAndHistory";
import NoticesAndAnnouncements from "./pages/studentDashboard/NoticesAndAnnouncements";
import StudentProfile from "./pages/studentDashboard/StudentProfile";

const App = () => {
  const { auth } = useAuth();
  const hasRedirected = useRef(false);

  console.log("🎯 App render:", {
    loading: auth.loading,
    loggedIn: auth.loggedIn,
    role: auth.user?.role,
    hasRedirected: hasRedirected.current
  });

  // ✅ Admin redirect
  useEffect(() => {
    console.log("🔍 Admin redirect check:", {
      hasRedirected: hasRedirected.current,
      loading: auth.loading,
      loggedIn: auth.loggedIn,
      role: auth.user?.role
    });

    if (
      !hasRedirected.current &&
      !auth.loading &&
      auth.loggedIn &&
      auth.user?.role === "admin"
    ) {
      hasRedirected.current = true;
      console.log("🔄 Redirecting admin to admin panel");
      window.location.href = import.meta.env.VITE_ADMIN_APP_URL;
    }
  }, [auth.loading, auth.loggedIn, auth.user?.role]);

  // Loading state
  if (auth.loading) {
    console.log("⏳ Showing loading screen");
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div>Checking authentication...</div>
      </div>
    );
  }

  // Admin redirect screen
  if (auth.loggedIn && auth.user?.role === "admin") {
    console.log("👨‍💼 Showing admin redirect screen");
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div>Redirecting to admin panel...</div>
      </div>
    );
  }

  console.log("📄 Rendering routes");

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />


          <Route path="admission" element={<Admission />} />
          <Route path="/admission/status" element={<AdmissionStatus />} />
          <Route path="/admission/confirm/:id" element={<AdmissionConfirm />} />
          <Route path="faculty" element={<Faculty />} />
          <Route path="aboutUs" element={<AboutUs />} />

          {/* Courses Routes */}
          <Route path="course">
            <Route path="6-8" element={<Courses6to8 />} />
            <Route path="9-10" element={<Courses9to10 />} />
            <Route path="11-12" element={<Courses11to12 />} />
          </Route>

          <Route path="courses" element={<OurCoursesLearnMore />} > {/* All courses overview */}
            <Route index element={<Math />} />
            <Route path="math" element={<Math />} />
            <Route path="science" element={<Science />} />
            <Route path="english" element={<English />} />
            <Route path="allSubjects" element={<AllSubjects />} />
          </Route>

          <Route path="schedule" element={<Schedule />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contactUs" element={<ContactUs />} />
          <Route path="faq" element={<FAQ />} />

          <Route
            path="login"
            element={auth.loggedIn ? <Navigate to="/" replace /> : <Login />}
          />
          <Route
            path="register"
            element={auth.loggedIn ? <Navigate to="/" replace /> : <Register />}
          />
        </Route>


        <Route
          path="/profile"
          element={
            <RequireAuth>
              <StudentProfileLayout />
            </RequireAuth>
          }
        >
          {/* default /profile */}
          <Route index element={<Dashboard />} />

          {/* Dashboard */}
          <Route path="dashboard" element={<Dashboard />} />

          {/* My Courses */}
          <Route path="courses" element={<EnrolledCourses />} />
          <Route path="material" element={<StudyMaterial />} />

          {/* Marks */}
          <Route path="marks" element={<MarksAndHistory />} />

          {/* Notices */}
          <Route path="notices" element={<NoticesAndAnnouncements />} />

          {/* Profile */}
          <Route path="user" element={<StudentProfile />} />


          <Route path="user" element={<StudentDashboard1 />} />
          <Route path="admin" element={<AdminDashboard />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default App;