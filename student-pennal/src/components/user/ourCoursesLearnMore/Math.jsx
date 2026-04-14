import React from 'react';
import { ArrowRight, CheckCircle, Users, Clock, BookOpen, Award, Star, TrendingUp } from 'lucide-react';

// Math Component
const Math = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-500 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="text-center">
            <div className="inline-block mb-4 text-6xl animate-bounce">📐</div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent mb-6">
              Mathematics
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Class 6–12 Math with easy-to-understand concepts and problem solving. Master mathematics with our expert guidance and structured approach.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg">
                <Users className="text-orange-500" size={20} />
                <span className="font-semibold">150+ Students</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg">
                <Clock className="text-pink-500" size={20} />
                <span className="font-semibold">Full Year</span>
              </div>
            </div>
            {/* <button className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto">
              Enroll Now <ArrowRight size={20} />
            </button> */}
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Course Highlights</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: "🎯", title: "Problem Solving", desc: "Learn systematic approaches to tackle complex problems" },
            { icon: "📝", title: "Practice Sets", desc: "Extensive practice material with solutions" },
            { icon: "🎓", title: "Board Exam Focus", desc: "Special emphasis on board exam patterns" }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What You'll Learn */}
      <div className="bg-gradient-to-r from-orange-400 to-pink-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">What You'll Master</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Algebra & Equations",
              "Geometry & Trigonometry",
              "Calculus & Integration",
              "Statistics & Probability",
              "Number Systems",
              "Coordinate Geometry",
              "Mathematical Reasoning",
              "Applied Mathematics"
            ].map((topic, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <CheckCircle className="text-white flex-shrink-0" size={24} />
                <span className="text-white text-lg font-medium">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { icon: <Star className="text-orange-500" size={40} />, value: "4.9/5", label: "Student Rating" },
            { icon: <TrendingUp className="text-pink-500" size={40} />, value: "95%", label: "Success Rate" },
            { icon: <BookOpen className="text-orange-500" size={40} />, value: "500+", label: "Practice Questions" },
            { icon: <Award className="text-pink-500" size={40} />, value: "100%", label: "Board Focus" }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Math



