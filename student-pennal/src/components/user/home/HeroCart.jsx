import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useState, useEffect } from "react";

// Hero Data
const heroData = [
  {
    title: "Master Math With Experts",
    description:
      "Join our offline coaching and excel in exams with experienced faculty.",
    image: "2.png",
    ctaText: "Take Admission",
    ctaLink: "/admission",
  },
  {
    title: "Board Exam Preparation",
    description:
      "Strong foundation and exam-oriented preparation for Class 6–12 board exams.",
    image: "logo/logo1.png",
    ctaText: "Explore Courses",
    ctaLink: "/course/11-12",
  },
  {
    title: "Interactive Classroom Learning",
    description:
      "Experience live classes, doubt sessions, and practical learning.",
    image: "logo/logo.png",
    ctaText: "Book Free Demo",
    ctaLink: "/contactUs",
  },
];



// Hero Card Component
const HeroCard = ({ heroItem, isActive }) => {
  return (
    <div className={`space-y-3 sm:space-y-4 md:space-y-6 w-full max-w-xl mx-auto lg:mx-0 text-center lg:text-left px-4 sm:px-6 transition-all duration-700 ${
      isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 drop-shadow-2xl leading-tight transition-all duration-700 delay-100 ${
        isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}>
        {heroItem.title}
      </h1>
      <p className={`text-gray-100 text-sm sm:text-base md:text-lg lg:text-xl drop-shadow-lg leading-relaxed transition-all duration-700 delay-200 ${
        isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}>
        {heroItem.description}
      </p>
      {heroItem.ctaText && (
        <a
          href={heroItem.ctaLink || "#"}
          className={`inline-block mt-3 sm:mt-4 px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3.5 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold text-sm sm:text-base rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl active:scale-95 transition-all duration-700 delay-300 ${
            isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
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
    }, 50);

    const autoPlayInterval = setInterval(() => {
      handleNext();
    }, 5000);

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
    <section className="relative w-full h-[70vh] sm:h-[75vh] md:h-[85vh] lg:h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Fade and Scale Transition */}
      {heroData.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentIndex
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-110'
          }`}
        >
          {/* Responsive background - contain on mobile, cover on desktop */}
          <div
            className="w-full h-full bg-no-repeat md:bg-cover"
            style={{
              backgroundImage: `url('${item.image}')`,
              backgroundPosition: 'center center',
              backgroundSize: window.innerWidth < 768 ? 'contain' : 'cover',
            }}
          />
        </div>
      ))}

      {/* Enhanced Gradient Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 md:bg-gradient-to-r md:from-black/70 md:via-black/40 md:to-transparent"></div>

      {/* Navigation Arrows - Hidden on small mobile */}
      <button
        onClick={handlePrev}
        disabled={isTransitioning}
        className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/40 active:bg-white/50 disabled:opacity-50 disabled:cursor-not-allowed p-2 md:p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 group"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} className="sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={handleNext}
        disabled={isTransitioning}
        className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/40 active:bg-white/50 disabled:opacity-50 disabled:cursor-not-allowed p-2 md:p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 group"
        aria-label="Next slide"
      >
        <ChevronRight size={20} className="sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Play/Pause Button */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-20 sm:top-24 md:top-6 right-3 sm:right-4 md:right-6 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/40 active:bg-white/50 p-2 md:p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label={isAutoPlaying ? "Pause autoplay" : "Resume autoplay"}
      >
        {isAutoPlaying ? (
          <Pause size={16} className="sm:w-5 sm:h-5 text-white" />
        ) : (
          <Play size={16} className="sm:w-5 sm:h-5 text-white" />
        )}
      </button>

      {/* Dots Indicator with Progress Bar - Repositioned for mobile */}
      <div className="absolute bottom-20 sm:bottom-24 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 items-center bg-black/20 backdrop-blur-sm px-3 py-2 rounded-full">
        {heroData.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            disabled={isTransitioning}
            className={`relative overflow-hidden rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 sm:w-10 h-2'
                : 'w-2 h-2 hover:scale-125 active:scale-150'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <div className={`w-full h-full ${
              index === currentIndex
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
      <div className="absolute bottom-20 sm:bottom-24 md:bottom-8 right-3 sm:right-4 md:right-6 z-20 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
        <span className="text-white text-xs sm:text-sm font-semibold">
          {currentIndex + 1} / {heroData.length}
        </span>
      </div>

      {/* Hero Content - Better positioned for mobile */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center lg:items-start px-4 sm:px-6 lg:px-8 pb-32 sm:pb-36 md:pb-24 lg:pb-32 pt-24 sm:pt-28 md:pt-20">
        <div className="max-w-7xl mx-auto w-full flex items-center lg:items-start h-full">
          <HeroCard heroItem={heroItem} isActive={!isTransitioning} />
        </div>
      </div>

      {/* Mobile Bottom Spacing for Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-10"></div>
    </section>
  );
};

export default HeroCart;