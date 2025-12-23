import React, { useState, useEffect } from "react";
import { BookOpen, Users, Clock, ChevronRight } from "lucide-react";

// Courses data
const courses = [
  {
    title: "Mathematics",
    description: "Class 5–12 Math with easy-to-understand concepts and problem solving.",
    icon: "📐",
    color: "from-orange-400 to-pink-500",
    features: ["Problem Solving", "Practice Sets", "Board Exam Focus"],
    students: "150+",
    duration: "Full Year"
  },
  {
    title: "Science",
    description: "Physics, Chemistry, and Biology explained in simple language.",
    icon: "🔬",
    color: "from-purple-500 to-indigo-600",
    features: ["Practical Knowledge", "Lab Experiments", "Concept Clarity"],
    students: "120+",
    duration: "Full Year"
  },
  {
    title: "English",
    description: "Grammar, Reading, Writing & Speaking skills improvement.",
    icon: "📚",
    color: "from-yellow-400 to-orange-500",
    features: ["Grammar", "Writing Skills", "Speaking Practice"],
    students: "100+",
    duration: "Full Year"
  },
  {
    title: "All Subjects (up to Class 8)",
    description: "Math, Science, English, Social Studies & Computer.",
    icon: "🎓",
    color: "from-pink-400 to-purple-500",
    features: ["Complete Package", "All Subjects", "Foundation Building"],
    students: "200+",
    duration: "Full Year"
  },
];

const CoursesSection = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.course-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-700"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <BookOpen className="w-8 h-8 text-orange-500" />
            <span className="text-orange-600 font-semibold uppercase tracking-wider text-sm">What We Offer</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 mb-4">
            Our Courses
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive learning programs designed to help students excel in their academics
          </p>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              data-index={index}
              className={`course-card group relative transition-all duration-700 ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card */}
              <div className={`relative h-full flex flex-col p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${course.color} text-white overflow-hidden transform hover:-translate-y-2`}>
                
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full transform -translate-x-12 translate-y-12 group-hover:scale-150 transition-transform duration-700"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className="text-6xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    {course.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-200 transition-colors duration-300">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/90 mb-4 flex-grow leading-relaxed">
                    {course.description}
                  </p>

                  {/* Features List */}
                  <div className={`space-y-2 mb-4 transition-all duration-500 ${
                    hoveredCard === index ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'
                  }`}>
                    {course.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/20">
                    <div className="flex items-center gap-1 text-sm">
                      <Users className="w-4 h-4" />
                      <span>{course.students}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="mt-4 w-full py-2.5 px-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl font-semibold text-white flex items-center justify-center gap-2 group-hover:gap-3 transition-all duration-300 border border-white/30">
                    Learn More
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>

              {/* Floating Badge (Appears on Hover) */}
              <div className={`absolute -top-3 -right-3 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg transition-all duration-300 ${
                hoveredCard === index ? 'opacity-100 scale-100 rotate-12' : 'opacity-0 scale-0'
              }`}>
                Popular
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 text-lg">
            Can't find what you're looking for?
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2">
            Contact Us for Custom Courses
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;