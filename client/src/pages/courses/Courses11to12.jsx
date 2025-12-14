import React from "react";
import CourseCard from "../../components/user/courses/CourseCard";


const courses11to12Data = [
  {
    title: "Class 11 Science Foundation",
    category: "Class 11",
    description:
      "Strong foundation in Physics, Chemistry, and Mathematics/Biology with concept-based teaching.",
    duration: "1 Year",
    timing: "Morning / Evening",
  },
  {
    title: "Class 12 Board Excellence",
    category: "Class 12",
    description:
      "Complete board exam preparation with regular tests, revision sessions, and answer writing practice.",
    duration: "1 Year",
    timing: "Evening Batch",
  },
  {
    title: "Class 11–12 Competitive Preparation",
    category: "Class 11–12",
    description:
      "Integrated preparation for boards along with competitive exams like JEE / NEET foundation.",
    duration: "2 Years",
    timing: "Morning Batch",
  },
];

const Courses11to12 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-white">

      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white py-14 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            Classes 11 – 12 Courses
          </h1>
          <p className="mt-2 text-white/90">
            Board + Competitive focused expert coaching
          </p>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses11to12Data.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-12 text-center text-white">
        <h2 className="text-2xl font-bold">
          Step Into Your Academic Turning Point
        </h2>
        <p className="mt-2 text-white/80">
          Join our expert-guided batches for Classes 11 & 12
        </p>
        <button
          className="mt-6 px-8 py-3 rounded-xl font-semibold text-white
          bg-gradient-to-r from-yellow-400 to-orange-500
          shadow-lg hover:scale-105 transition"
        >
          Book Free Demo Class
        </button>
      </div>

    </div>
  );
};

export default Courses11to12;
