import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

// Hero Data
const heroData = [
  {
    title: "Master Math With Experts",
    description:
      "Join our offline coaching and excel in exams with experienced faculty.",
    image: "2.png",
    ctaText: "Enroll Now",
    ctaLink: "/admission",
  },
  {
    title: "IIT-JEE & Competitive Exams",
    description:
      "Prepare for competitive exams with our specialized batches.",
    image: "1.png",
    ctaText: "View Courses",
    ctaLink: "/courses/competitive",
  },
  {
    title: "Interactive Classroom Learning",
    description:
      "Experience live classes, doubt sessions, and practical learning.",
    image: "3.jpg",
    ctaText: "Book Demo",
    ctaLink: "/contactUs",
  },
];

// Hero Card Component
const HeroCard = ({ heroItem }) => {
  return (
    <div className="space-y-4 max-w-xl mx-auto text-center lg:text-left px-4 sm:px-0">
      <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 drop-shadow-lg animate-fadeIn">
        {heroItem.title}
      </h1>
      <p className="text-gray-100 text-base sm:text-lg lg:text-xl drop-shadow-md animate-fadeIn delay-200">
        {heroItem.description}
      </p>
      {heroItem.ctaText && (
        <a
          href={heroItem.ctaLink || "#"}
          className="inline-block mt-4 px-5 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        >
          {heroItem.ctaText}
        </a>
      )}
    </div>
  );
};

// Main HeroCart Component
const HeroCart = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === heroData.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? heroData.length - 1 : prev - 1));
  };

  const heroItem = heroData[currentIndex];
  if (!heroItem) return null;

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center transition-all duration-700 bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url('${heroItem.image}')`,
      }}
    >
      {/* Transparent Overlay for Text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 p-2 sm:p-3 rounded-full shadow-lg transition"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 p-2 sm:p-3 rounded-full shadow-lg transition"
      >
        <ChevronRight size={20} />
      </button>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col justify-center items-center sm:items-start h-full text-center sm:text-left px-4 sm:px-6 lg:px-8">
        <HeroCard heroItem={heroItem} />
      </div>
    </section>
  );
};

export default HeroCart;
