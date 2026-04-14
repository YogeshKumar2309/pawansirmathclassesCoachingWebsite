import React from "react";
import { Award, BookOpen, Bell } from "lucide-react";
import { useAuth } from "../../context/AuthContext"; 

const COLORS = {
  PrimaryText: "text-indigo-900",
  SecondaryText: "text-gray-600",
  CardShadow: "shadow-xl hover:shadow-2xl transition duration-300",
};

const Dashboard = () => {
  const { auth } = useAuth();

  return (
    <div className="space-y-8">
      {/* Header */}
      <h1 className={`text-4xl font-extrabold mb-6 ${COLORS.PrimaryText}`}>
        Welcome back,{" "}
        <span className="text-pink-600">
          {auth.user?.name || "Student"}
        </span>
        !
      </h1>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Latest Score */}
        <div
          className={`p-6 rounded-xl ${COLORS.CardShadow} bg-white border-l-4 border-pink-500`}
        >
          <Award className="w-8 h-8 mb-3 text-pink-500" />
          <h3 className="text-xl font-semibold">Latest Score</h3>
          <p className={`text-3xl font-bold ${COLORS.PrimaryText}`}>
            78 / 100
          </p>
          <p className={COLORS.SecondaryText}>Mid Term Test</p>
        </div>

        {/* Enrolled Courses */}
        <div
          className={`p-6 rounded-xl ${COLORS.CardShadow} bg-white border-l-4 border-indigo-500`}
        >
          <BookOpen className="w-8 h-8 mb-3 text-indigo-500" />
          <h3 className="text-xl font-semibold">Enrolled Courses</h3>
          <p className={`text-3xl font-bold ${COLORS.PrimaryText}`}>3</p>
          <p className={COLORS.SecondaryText}>Active Batch: 2024</p>
        </div>

        {/* Notices */}
        <div
          className={`p-6 rounded-xl ${COLORS.CardShadow} bg-white border-l-4 border-yellow-500`}
        >
          <Bell className="w-8 h-8 mb-3 text-yellow-500" />
          <h3 className="text-xl font-semibold">New Notices</h3>
          <p className={`text-3xl font-bold ${COLORS.PrimaryText}`}>1</p>
          <p className={COLORS.SecondaryText}>
            Check Notices tab for details
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
