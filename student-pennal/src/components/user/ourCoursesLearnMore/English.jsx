import React from 'react';
import { ArrowRight, CheckCircle, Users, Clock, BookOpen, Award, Star, TrendingUp } from 'lucide-react';

// English Component
const English = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="text-center">
            <div className="inline-block mb-4 text-6xl animate-bounce">📚</div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-6">
              English
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Grammar, Reading, Writing & Speaking skills improvement. Build strong communication skills with comprehensive English training.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg">
                <Users className="text-yellow-500" size={20} />
                <span className="font-semibold">100+ Students</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg">
                <Clock className="text-orange-500" size={20} />
                <span className="font-semibold">Full Year</span>
              </div>
            </div>
            {/* <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto">
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
            { icon: "✍️", title: "Grammar", desc: "Master English grammar from basics to advanced" },
            { icon: "📖", title: "Writing Skills", desc: "Creative and academic writing techniques" },
            { icon: "🗣️", title: "Speaking Practice", desc: "Build confidence in spoken English" }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Development */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Skills You'll Develop</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Advanced Grammar & Syntax",
              "Creative Writing",
              "Academic Writing",
              "Reading Comprehension",
              "Vocabulary Building",
              "Public Speaking",
              "Debate & Discussion",
              "Literature Analysis"
            ].map((skill, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <CheckCircle className="text-white flex-shrink-0" size={24} />
                <span className="text-white text-lg font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { icon: <Star className="text-yellow-500" size={40} />, value: "4.9/5", label: "Student Rating" },
            { icon: <TrendingUp className="text-orange-500" size={40} />, value: "98%", label: "Improvement" },
            { icon: <BookOpen className="text-yellow-500" size={40} />, value: "250+", label: "Practice Sessions" },
            { icon: <Award className="text-orange-500" size={40} />, value: "100%", label: "Interactive" }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default English