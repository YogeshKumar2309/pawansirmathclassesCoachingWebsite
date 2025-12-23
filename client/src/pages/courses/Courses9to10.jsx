import React from "react";
import CourseCard from "../../components/user/courses/CourseCard";


const courses9to10Data = [
  {
    title: "Class 9 Concept Strengthening",
    category: "Class 9",
    description:
      "In-depth preparation for Mathematics and Science with focus on NCERT concepts, numericals, and exams.",
    duration: "1 Year",
    timing: "Evening Batch",
  },
  {
    title: "Class 10 Board Special",
    category: "Class 10",
    description:
      "Complete board exam-focused course with regular tests, doubt sessions, and revision strategy.",
    duration: "1 Year",
    timing: "Morning & Evening",
  },
  {
    title: "Class 9–10 Foundation for Competitive Exams",
    category: "Class 9–10",
    description:
      "Early preparation for Olympiads and future competitive exams along with school syllabus.",
    duration: "2 Years",
    timing: "Weekend / Evening",
  },
];

const Courses9to10 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-white">

      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white py-14 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            Classes 9 – 10 Courses
          </h1>
          <p className="mt-2 text-white/90">
            Board-focused preparation with strong conceptual clarity
          </p>
        </div>
      </div>

      {/* Courses */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses9to10Data.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>

      

    </div>
  );
};

export default Courses9to10;
