import React from "react";

const COLORS = {
  PrimaryText: "text-indigo-900",
  SecondaryText: "text-gray-600",
  CardShadow: "shadow-xl hover:shadow-2xl transition duration-300",
};

const DUMMY_STUDENT = {
  marksHistory: [
    { test: "Mock Test 1", date: "2025-11-20", score: 78, total: 100 },
    { test: "Quiz: Waves", date: "2025-12-05", score: 22, total: 30 },
    { test: "Term Exam", date: "2025-12-15", score: 350, total: 500 },
  ],
};

const MarksAndHistory = () => {
  return (
    <div className="space-y-6">
      <h2 className={`text-3xl font-bold mb-6 ${COLORS.PrimaryText}`}>
        Test History & Marks
      </h2>

      <div
        className={`overflow-x-auto bg-white rounded-xl ${COLORS.CardShadow}`}
      >
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-indigo-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-indigo-900">
                Test Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-indigo-900">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-indigo-900">
                Score
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-indigo-900">
                Remarks
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {DUMMY_STUDENT.marksHistory.map((item, index) => {
              const percentage = item.score / item.total;

              return (
                <tr
                  key={index}
                  className="hover:bg-gray-50 transition duration-150"
                >
                  <td
                    className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${COLORS.PrimaryText}`}
                  >
                    {item.test}
                  </td>

                  <td
                    className={`px-6 py-4 whitespace-nowrap text-sm ${COLORS.SecondaryText}`}
                  >
                    {item.date}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-md font-bold text-pink-600">
                    {item.score} / {item.total}
                  </td>

                  <td
                    className={`px-6 py-4 whitespace-nowrap text-sm ${COLORS.SecondaryText}`}
                  >
                    {percentage >= 0.7 ? "Excellent" : "Needs Improvement"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarksAndHistory;
