import React from "react";
import CourseCard from "../../components/user/courses/CourseCard";


const courses6to8Data = [
  {
    title: "Class 6 Foundation Course",
    category: "Class 6",
    description:
      "Strong foundation in Mathematics, Science, and Mental Ability with focus on basics and school exams.",
    duration: "1 Year",
    timing: "Morning / Evening",
  },
  {
    title: "Class 7 Concept Builder",
    category: "Class 7",
    description:
      "Concept-based learning with regular tests to prepare students for school and future competitive exams.",
    duration: "1 Year",
    timing: "Evening",
  },
  {
    title: "Class 8 Advanced Basics",
    category: "Class 8",
    description:
      "Advanced level preparation focusing on problem-solving, reasoning, and strong fundamentals.",
    duration: "1 Year",
    timing: "Morning / Evening",
  },
];

const Courses6to8 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-white">

      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white py-14 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            Classes 6 – 8 Courses
          </h1>
          <p className="mt-2 text-white/90">
            Strong foundation for school & competitive exams
          </p>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses6to8Data.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-12 text-center text-white">
        <h2 className="text-2xl font-bold">
          Give Your Child a Strong Academic Foundation
        </h2>
        <p className="mt-2 text-white/80">
          Visit our center or call us for a free counseling session
        </p>
        <button className="mt-6 px-8 py-3 rounded-xl font-semibold 
          bg-gradient-to-r from-yellow-400 to-orange-500 
          text-white shadow-lg hover:scale-105 transition">
          Book Free Demo Class
        </button>
      </div>

    </div>
  );
};

export default Courses6to8;
