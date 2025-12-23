import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useState, useEffect } from "react";

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
    image: "logo/logo.png",
    ctaText: "Book Demo",
    ctaLink: "/contactUs",
  },
];

// Hero Card Component
const HeroCard = ({ heroItem, isActive }) => {
  return (
    <div className={`space-y-4 sm:space-y-6 max-w-xl mx-auto text-center lg:text-left px-4 sm:px-0 transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
      <h1 className={`text-3xl sm:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 drop-shadow-lg transition-all duration-700 delay-100 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}>
        {heroItem.title}
      </h1>
      <p className={`text-gray-100 text-base sm:text-lg lg:text-xl drop-shadow-md transition-all duration-700 delay-200 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}>
        {heroItem.description}
      </p>
      {heroItem.ctaText && (
        <a
          href={heroItem.ctaLink || "#"}
          className={`inline-block mt-4 px-5 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-semibold rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-700 delay-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) {
      setProgress(0);
      return;
    }

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 1;
      });
    }, 50); // Update every 50ms for smooth animation

    const autoPlayInterval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds

    return () => {
      clearInterval(progressInterval);
      clearInterval(autoPlayInterval);
    };
  }, [isAutoPlaying, currentIndex]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setProgress(0);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === heroData.length - 1 ? 0 : prev + 1));
      setIsTransitioning(false);
    }, 300);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setProgress(0);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? heroData.length - 1 : prev - 1));
      setIsTransitioning(false);
    }, 300);
  };

  const handleDotClick = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setProgress(0);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 300);
  };

  const heroItem = heroData[currentIndex];
  if (!heroItem) return null;

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Fade and Scale Transition */}
      {heroData.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentIndex
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-110'
            }`}
        >
          <div
            className="w-full h-full bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url('${item.image}')`,
              backgroundPosition: 'center',
            }}
          />
        </div>
      ))}

      {/* Gradient Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        disabled={isTransitioning}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/40 disabled:opacity-50 disabled:cursor-not-allowed p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="text-white group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={handleNext}
        disabled={isTransitioning}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/40 disabled:opacity-50 disabled:cursor-not-allowed p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
        aria-label="Next slide"
      >
        <ChevronRight size={24} className="text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Play/Pause Button */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-6 right-6 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/40 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label={isAutoPlaying ? "Pause autoplay" : "Resume autoplay"}
      >
        {isAutoPlaying ? (
          <Pause size={20} className="text-white" />
        ) : (
          <Play size={20} className="text-white" />
        )}
      </button>

      {/* Dots Indicator with Progress Bar */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 items-center">
        {heroData.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            disabled={isTransitioning}
            className={`relative overflow-hidden rounded-full transition-all duration-300 ${index === currentIndex
                ? 'w-8 sm:w-10 h-2'
                : 'w-2 h-2 hover:scale-125'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <div className={`w-full h-full ${index === currentIndex
                ? 'bg-white/30'
                : 'bg-white/50 hover:bg-white/80'
              }`} />
            {index === currentIndex && isAutoPlaying && (
              <div
                className="absolute top-0 left-0 h-full bg-orange-400 transition-all duration-50 ease-linear"
                style={{ width: `${progress}%` }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-6 sm:bottom-8 right-6 z-20 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
        <span className="text-white text-sm font-medium">
          {currentIndex + 1} / {heroData.length}
        </span>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col justify-end items-center lg:items-start h-full text-center lg:text-left px-4 sm:px-6 lg:px-8 pb-24 sm:pb-32">
        <HeroCard heroItem={heroItem} isActive={!isTransitioning} />
      </div>


    </section>
  );
};

export default HeroCart;