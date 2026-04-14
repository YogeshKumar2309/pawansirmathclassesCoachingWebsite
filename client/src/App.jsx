// App.jsx
import { Route, Routes, Navigate } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import Home from "./pages/home/Home";
import Gallery from "./pages/gallery/Gallery";
import Faculty from "./pages/faculty/Faculty";
import AboutUs from "./pages/aboutUs/AboutUs";
import Courses6to8 from "./pages/courses/Courses6to8";
import Courses9to10 from "./pages/courses/Courses9to10";
import Courses11to12 from "./pages/courses/Courses11to12";
import Schedule from "./pages/schedule/Schedule";
import Testimonials from "./pages/testimonials/Testimonials";
import ContactUs from "./pages/contactUs/ContactUs";
import FAQ from "./pages/faq/Faq";
import OurCoursesLearnMore from "./pages/ourCoursesLearnMore/OurCoursesLearnMore";
import Math from "./components/user/ourCoursesLearnMore/Math";
import Science from "./components/user/ourCoursesLearnMore/Science";
import English from "./components/user/ourCoursesLearnMore/English";
import AllSubjects from "./components/user/ourCoursesLearnMore/AllSubjects";
import Admission from "./pages/admission/Admission";
import AdmissionStatus from "./pages/admission/AdmissionStatus";
import AdmissionConfirm from "./pages/admission/AdmissionConfirm";
import { Toaster } from "react-hot-toast";



const App = () => {

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />


          <Route path="admission" element={<Admission />} />
  
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

      
        </Route>




        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default App;