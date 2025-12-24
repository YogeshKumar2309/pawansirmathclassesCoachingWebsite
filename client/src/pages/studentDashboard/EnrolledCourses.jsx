import React from "react";
import { BookOpen, Clock } from "lucide-react";

const COLORS = {
  PrimaryText: "text-indigo-900",
  SecondaryText: "text-gray-600",
  CardShadow: "shadow-xl hover:shadow-2xl transition duration-300",
};

const DUMMY_STUDENT = {
  name: "आर्यन शर्मा",
  id: "SM-101",
  email: "aryan@example.com",
  phone: "98765-43210",
  batch: "JEE Advanced 2026",
  enrolled: [
    "Physics: Mechanics",
    "Maths: Calculus",
    "Chemistry: Organic",
  ],
};

const EnrolledCourses = () => {
  return (
    <div className="space-y-6">
      <h2 className={`text-3xl font-bold mb-6 ${COLORS.PrimaryText}`}>
        My Enrolled Courses
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {DUMMY_STUDENT.enrolled.map((course, index) => (
          <div
            key={index}
            className={`p-5 rounded-xl bg-white border-l-8 border-indigo-600 ${COLORS.CardShadow}`}
          >
            <BookOpen className="w-6 h-6 mb-2 text-indigo-600" />

            <h3 className={`text-xl font-semibold ${COLORS.PrimaryText}`}>
              {course}
            </h3>

            <p className={COLORS.SecondaryText}>
              Batch: {DUMMY_STUDENT.batch}
            </p>

            <p className="text-sm mt-3 text-purple-600 font-medium flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              Class Timing: 5:00 PM – 7:00 PM
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnrolledCourses;
