import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col justify-between">
      
      <div>
        <h3 className="text-xl font-semibold text-gray-800">
          {course.title}
        </h3>

        <p className="text-sm text-purple-600 font-medium mt-1">
          {course.category}
        </p>

        <p className="text-gray-600 mt-3 text-sm leading-relaxed">
          {course.description}
        </p>

        <div className="grid grid-cols-2 gap-4 mt-5 text-sm">
          <div>
            <p className="text-gray-500">Duration</p>
            <p className="font-medium text-gray-800">{course.duration}</p>
          </div>
          <div>
            <p className="text-gray-500">Batch Timing</p>
            <p className="font-medium text-gray-800">{course.timing}</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <button className="mt-6 w-full px-4 py-3 rounded-xl font-semibold text-white 
        bg-gradient-to-r from-yellow-400 to-orange-500 
        shadow-lg hover:scale-105 transition">
        Enquire Now
      </button>
    </div>
  );
};

export default CourseCard;
