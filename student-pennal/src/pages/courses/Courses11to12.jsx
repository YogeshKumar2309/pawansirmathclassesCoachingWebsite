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

    

    </div>
  );
};

export default Courses11to12;
