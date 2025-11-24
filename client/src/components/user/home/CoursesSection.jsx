import React from "react";

// Courses data
const courses = [
  {
    title: "Mathematics",
    description: "Class 5–12 Math with easy-to-understand concepts and problem solving.",
    icon: "📐",
    color: "from-orange-400 to-pink-500"
  },
  {
    title: "Science",
    description: "Physics, Chemistry, and Biology explained in simple language.",
    icon: "🔬",
    color: "from-purple-500 to-indigo-600"
  },
  {
    title: "English",
    description: "Grammar, Reading, Writing & Speaking skills improvement.",
    icon: "📚",
    color: "from-yellow-400 to-orange-500"
  },
  {
    title: "All Subjects (up to Class 8)",
    description: "Math, Science, English, Social Studies & Computer.",
    icon: "🎓",
    color: "from-pink-400 to-purple-500"
  },
];

const CoursesSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
          Our Courses
        </h2>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-gradient-to-tr ${course.color} text-white`}
            >
              <div className="text-5xl mb-4">{course.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{course.title}</h3>
              <p className="text-white/90">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
