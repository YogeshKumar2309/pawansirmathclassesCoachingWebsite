import React from 'react';
import { ArrowRight, CheckCircle, Users, Clock, BookOpen, Award, Star, TrendingUp } from 'lucide-react';

// Science Component
const Science = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="text-center">
            <div className="inline-block mb-4 text-6xl animate-bounce">🔬</div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent mb-6">
              Science
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Physics, Chemistry, and Biology explained in simple language. Discover the wonders of science with practical knowledge and experiments.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg">
                <Users className="text-purple-500" size={20} />
                <span className="font-semibold">120+ Students</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg">
                <Clock className="text-indigo-600" size={20} />
                <span className="font-semibold">Full Year</span>
              </div>
            </div>
            {/* <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto">
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
            { icon: "🧪", title: "Practical Knowledge", desc: "Real-world applications and hands-on learning" },
            { icon: "🔭", title: "Lab Experiments", desc: "Virtual and practical lab demonstrations" },
            { icon: "💡", title: "Concept Clarity", desc: "Simple explanations of complex topics" }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Subjects Covered */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Subjects Covered</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Physics", topics: ["Mechanics", "Electricity", "Optics", "Modern Physics"] },
              { title: "Chemistry", topics: ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry", "Reactions"] },
              { title: "Biology", topics: ["Human Body", "Plants", "Genetics", "Ecology"] }
            ].map((subject, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">{subject.title}</h3>
                {subject.topics.map((topic, i) => (
                  <div key={i} className="flex items-center gap-2 mb-2">
                    <CheckCircle className="text-white" size={20} />
                    <span className="text-white">{topic}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { icon: <Star className="text-purple-500" size={40} />, value: "4.8/5", label: "Student Rating" },
            { icon: <TrendingUp className="text-indigo-600" size={40} />, value: "92%", label: "Success Rate" },
            { icon: <BookOpen className="text-purple-500" size={40} />, value: "300+", label: "Experiments" },
            { icon: <Award className="text-indigo-600" size={40} />, value: "100%", label: "Practical Focus" }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Science
