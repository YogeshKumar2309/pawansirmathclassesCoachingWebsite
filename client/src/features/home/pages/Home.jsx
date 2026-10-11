
import { useEffect } from "react";
import AboutTheTeacherSection from "../components/AboutTheTeacherSection";
import ContactSection from "../components/ContactSection";
import CoursesSection from "../components/CoursesSection";
import FeaturesSection from "../components/FeaturesSection";
import HeroCart from "../components/HeroCart";

import useHomeStore from "../store/homeStore";


const Home = () => {
  const heroData = useHomeStore((s) => s.heroData);
  const error = useHomeStore((s) => s.error);
  const loading = useHomeStore((s) => s.loading);
  const fetchHomeData = useHomeStore((s) => s.fetchHomeData);
  
  useEffect(() => {
    fetchHomeData();
  },[fetchHomeData]);
  
  console.log("home,",heroData);
    if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-10">
        <p className="text-red-500 mb-4">{error}</p>
        <button
          onClick={() => fetchHomeData(true)} // force refresh
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div>
      <HeroCart
         heroData={heroData}
      />
      <AboutTheTeacherSection />
      <CoursesSection />
      <FeaturesSection />
      {/* <TestimonialsSection /> */}
      <ContactSection />
    </div>
  )
}

export default Home