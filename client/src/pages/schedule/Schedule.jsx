import React from "react";

const scheduleData = [
  {
    className: "Class 6 – 8",
    batches: [
      { subject: "Mathematics", time: "4:00 PM – 5:00 PM", days: "Mon, Wed, Fri" },
      { subject: "Science", time: "5:00 PM – 6:00 PM", days: "Tue, Thu, Sat" },
    ],
  },
  {
    className: "Class 9 – 10",
    batches: [
      { subject: "Mathematics", time: "6:00 PM – 7:30 PM", days: "Mon, Wed, Fri" },
      { subject: "Science", time: "7:30 PM – 9:00 PM", days: "Tue, Thu, Sat" },
    ],
  },
  {
    className: "Class 11 – 12",
    batches: [
      { subject: "Math 11th", time: "6:00 AM – 7:30 AM", days: "Mon, Wed, Fri" },
      { subject: "Math 12th", time: "7:30 AM – 9:00 AM", days: "Tue, Thu, Sat" },
    ],
  },
];

const Schedule = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-white">

      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white py-14 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            Class Schedule
          </h1>
          <p className="mt-2 text-white/90">
            Weekly batch timings for all classes
          </p>
        </div>
      </div>

      {/* Schedule Content */}
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-12">

        {scheduleData.map((section, index) => (
          <div key={index}>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {section.className}
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.batches.map((batch, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
                >
                  <h3 className="text-lg font-semibold text-purple-700">
                    {batch.subject}
                  </h3>
                  <p className="text-gray-600 mt-2">
                    ⏰ {batch.time}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    📅 {batch.days}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-12 text-center text-white">
        <h2 className="text-2xl font-bold">
          Flexible Timings for Every Student
        </h2>
        <p className="mt-2 text-white/80">
          Contact us to choose the batch that suits you best
        </p>
        <button className="mt-6 px-8 py-3 rounded-xl font-semibold text-white
          bg-gradient-to-r from-yellow-400 to-orange-500
          shadow-lg hover:scale-105 transition">
          Contact Now
        </button>
      </div>

    </div>
  );
};

export default Schedule;
