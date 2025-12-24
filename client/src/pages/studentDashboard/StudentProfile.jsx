import React from "react";
import { Mail, Phone, User } from "lucide-react";

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
};

const StudentProfile = () => {
  return (
    <div className="space-y-6">
      <h2 className={`text-3xl font-bold mb-6 ${COLORS.PrimaryText}`}>
        My Profile (Read-Only)
      </h2>

      <div className={`p-6 bg-white rounded-xl ${COLORS.CardShadow}`}>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="space-y-1">
            <p className={`font-semibold ${COLORS.PrimaryText}`}>
              <User className="inline w-5 h-5 mr-2" />
              Student Name
            </p>
            <p className="text-xl font-bold text-pink-600">
              {DUMMY_STUDENT.name}
            </p>
          </div>

          {/* ID */}
          <div className="space-y-1">
            <p className={`font-semibold ${COLORS.PrimaryText}`}>
              Student ID
            </p>
            <p className={COLORS.SecondaryText}>
              {DUMMY_STUDENT.id}
            </p>
          </div>

          {/* Email */}
          <div className="space-y-1">
            <p className={`font-semibold flex items-center ${COLORS.PrimaryText}`}>
              <Mail className="w-5 h-5 mr-2" />
              Email
            </p>
            <p className={COLORS.SecondaryText}>
              {DUMMY_STUDENT.email}
            </p>
          </div>

          {/* Phone */}
          <div className="space-y-1">
            <p className={`font-semibold flex items-center ${COLORS.PrimaryText}`}>
              <Phone className="w-5 h-5 mr-2" />
              Phone
            </p>
            <p className={COLORS.SecondaryText}>
              {DUMMY_STUDENT.phone}
            </p>
          </div>

          {/* Batch */}
          <div className="space-y-1 md:col-span-2">
            <p className={`font-semibold ${COLORS.PrimaryText}`}>
              Enrolled Batch
            </p>
            <p className="text-purple-600 font-medium">
              {DUMMY_STUDENT.batch}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
