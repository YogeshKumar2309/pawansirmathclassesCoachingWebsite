
import AboutTheTeacherSection from "../../components/user/home/AboutTheTeacherSection";
import ContactSection from "../../components/user/home/ContactSection";
import CoursesSection from "../../components/user/home/CoursesSection";
import FeaturesSection from "../../components/user/home/FeaturesSection";
import HeroCart from "../../components/user/home/HeroCart";
import TestimonialsSection from "../../components/user/home/TestimonialsSection";

const Home = () => {
  return (
    <div>
      <HeroCart
      />
      <AboutTheTeacherSection />
      <CoursesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  )
}

export default Home