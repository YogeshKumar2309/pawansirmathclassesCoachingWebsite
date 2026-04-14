import React from "react";

const COLORS = {
  PrimaryText: "text-indigo-900",
  SecondaryText: "text-gray-600",
  CardShadow: "shadow-xl hover:shadow-2xl transition duration-300",
};

const NoticesAndAnnouncements = () => {
  return (
    <div className="space-y-6">
      <h2 className={`text-3xl font-bold mb-6 ${COLORS.PrimaryText}`}>
        Announcements & Notices
      </h2>

      <div className="space-y-4">
        {/* Holiday Notice */}
        <div
          className={`p-4 rounded-lg bg-indigo-50 border-l-4 border-indigo-600 ${COLORS.CardShadow}`}
        >
          <p className={`font-semibold ${COLORS.PrimaryText}`}>
            📌 Holiday Notice
          </p>
          <p className={COLORS.SecondaryText}>
            24th and 25th December will be holidays on the occasion of Christmas.
          </p>
        </div>

        {/* Upcoming Test */}
        <div
          className={`p-4 rounded-lg bg-yellow-50 border-l-4 border-yellow-600 ${COLORS.CardShadow}`}
        >
          <p className={`font-semibold ${COLORS.PrimaryText}`}>
            📝 Upcoming Test
          </p>
          <p className={COLORS.SecondaryText}>
            Unit Test 3 will be conducted on <strong>30th December</strong>.
            Please check the syllabus in the Study Material section.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoticesAndAnnouncements;
