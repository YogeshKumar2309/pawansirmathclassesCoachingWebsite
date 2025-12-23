import React from 'react';
import { ArrowRight, CheckCircle, Users, Clock, BookOpen, Award, Star, TrendingUp } from 'lucide-react';

// AllSubjects Component
const AllSubjects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="text-center">
            <div className="inline-block mb-4 text-6xl animate-bounce">🎓</div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent mb-6">
              All Subjects Package
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Math, Science, English, Social Studies & Computer (up to Class 8). Complete foundation building for all-round development.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg">
                <Users className="text-pink-500" size={20} />
                <span className="font-semibold">200+ Students</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg">
                <Clock className="text-purple-500" size={20} />
                <span className="font-semibold">Full Year</span>
              </div>
            </div>
            {/* <button className="bg-gradient-to-r from-pink-400 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto">
              Enroll Now <ArrowRight size={20} />
            </button> */}
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose Complete Package?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: "📦", title: "Complete Package", desc: "All subjects covered in one comprehensive course" },
            { icon: "📚", title: "All Subjects", desc: "Math, Science, English, Social Studies & Computer" },
            { icon: "🏗️", title: "Foundation Building", desc: "Strong base for higher education" }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* All Subjects Grid */}
      <div className="bg-gradient-to-r from-pink-400 to-purple-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Complete Curriculum</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "📐", subject: "Mathematics", topics: "Numbers, Algebra, Geometry" },
              { icon: "🔬", subject: "Science", topics: "Physics, Chemistry, Biology" },
              { icon: "📚", subject: "English", topics: "Grammar, Writing, Speaking" },
              { icon: "🌍", subject: "Social Studies", topics: "History, Geography, Civics" },
              { icon: "💻", subject: "Computer", topics: "Basics, Coding, Applications" },
              { icon: "🎨", subject: "Extra Activities", topics: "Projects, Quizzes, Games" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.subject}</h3>
                <p className="text-white/80">{item.topics}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Package Benefits</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "One-stop solution for all subjects",
            "Cost-effective complete package",
            "Synchronized learning across subjects",
            "Comprehensive study materials",
            "Regular assessments & feedback",
            "Dedicated doubt-solving sessions",
            "Parent-teacher meetings",
            "Progress tracking for all subjects"
          ].map((benefit, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-lg">
              <CheckCircle className="text-pink-500 flex-shrink-0" size={24} />
              <span className="text-gray-700 font-medium">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { icon: <Star className="text-pink-500" size={40} />, value: "4.9/5", label: "Student Rating" },
            { icon: <TrendingUp className="text-purple-500" size={40} />, value: "96%", label: "Success Rate" },
            { icon: <BookOpen className="text-pink-500" size={40} />, value: "5", label: "Subjects Covered" },
            { icon: <Award className="text-purple-500" size={40} />, value: "Best", label: "Value Package" }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};




export default AllSubjects
