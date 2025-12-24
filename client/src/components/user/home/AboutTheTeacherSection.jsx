import React, { useState, useEffect } from "react";
import { GraduationCap, Award, BookOpen, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Teacher की details
const teacherInfo = {
  name: "Pawan Kumar",
  experiences: [
    "5+ years teaching Class 9–12 Math",
    "5+ years teaching Class 9–12 Science",
    "Teaching all subjects up to Class 8"
  ],
  qualification: "B.A. in Mathematics",
  bio: "Pawan Sir believes in clear explanation, personalized attention, and helping every student achieve their best results.",
  image: "faculty/pawansir.png",
  subjects: ["Math", "Science", "English", "Social Studies"],
  achievements: [
    { icon: Award, text: "500+ Students Taught", color: "from-yellow-400 to-orange-500" },
    { icon: Star, text: "95% Success Rate", color: "from-pink-400 to-purple-500" },
    { icon: BookOpen, text: "10+ Years Experience", color: "from-blue-400 to-cyan-500" }
  ]
};

const AboutTheTeacherSection = () => {
  const [isVisible, setIsVisible] = useState(false);

const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('teacher-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="teacher-section" className="py-20 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-700"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Heading */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-2 mb-4">
            <GraduationCap className="w-8 h-8 text-purple-600" />
            <span className="text-purple-600 font-semibold uppercase tracking-wider text-sm">Meet Your Guide</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600">
            About The Teacher
          </h2>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className={`transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex flex-col lg:flex-row items-center gap-12 bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-purple-100">
            
            {/* Photo Section */}
            <div className="flex-shrink-0 relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse"></div>
              <div className="relative">
                <img
                  src={teacherInfo.image}
                  alt={teacherInfo.name}
                  className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-8 border-white shadow-2xl group-hover:scale-105 transition-transform duration-500 relative z-10"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full p-3 shadow-lg z-20">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">
              
              {/* Name & Qualification */}
              <div>
                <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  {teacherInfo.name}
                </h3>
                <p className="text-lg text-gray-600 font-medium flex items-center justify-center lg:justify-start gap-2">
                  <GraduationCap className="w-5 h-5 text-purple-500" />
                  {teacherInfo.qualification}
                </p>
              </div>

              {/* Achievements Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {teacherInfo.achievements.map((achievement, i) => {
                  const Icon = achievement.icon;
                  return (
                    <div 
                      key={i}
                      className={`bg-gradient-to-br ${achievement.color} p-4 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300 delay-${i * 100}`}
                    >
                      <Icon className="w-6 h-6 text-white mb-2 mx-auto lg:mx-0" />
                      <p className="text-white font-semibold text-sm">{achievement.text}</p>
                    </div>
                  );
                })}
              </div>

              {/* Experience Points */}
              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-gray-800 flex items-center gap-2 justify-center lg:justify-start">
                  <BookOpen className="w-5 h-5 text-purple-600" />
                  Teaching Experience
                </h4>
                {teacherInfo.experiences.map((exp, i) => (
                  <div 
                    key={i}
                    className={`flex items-start gap-3 transition-all duration-500 delay-${(i + 3) * 100} ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}
                  >
                    <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full mt-2"></div>
                    <p className="text-gray-700 font-medium">{exp}</p>
                  </div>
                ))}
              </div>

              {/* Subjects */}
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2 justify-center lg:justify-start">
                  <Star className="w-5 h-5 text-purple-600" />
                  Subjects Taught
                </h4>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  {teacherInfo.subjects.map((sub, i) => (
                    <span
                      key={i}
                      className={`px-4 py-2 bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-full text-sm font-semibold shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 delay-${i * 50} cursor-default`}
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bio */}
              <div className="relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full hidden lg:block"></div>
                <p className="text-gray-600 leading-relaxed lg:pl-6 italic border-l-4 border-transparent lg:border-purple-200 text-base md:text-lg">
                  "{teacherInfo.bio}"
                </p>
              </div>

              {/* CTA Button */}
              <div className="flex gap-4 justify-center lg:justify-start mt-4">
            
                <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border-2 border-purple-600"
                 onClick={() => navigate("/contactUs")}
                >
                  Contact Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTheTeacherSection;