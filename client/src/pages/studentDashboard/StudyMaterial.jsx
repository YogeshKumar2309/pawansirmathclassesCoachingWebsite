import React from "react";
import { FileText, Download } from "lucide-react";

const COLORS = {
  PrimaryText: "text-indigo-900",
  SecondaryText: "text-gray-600",
  AccentBg: "bg-yellow-400 hover:bg-yellow-500",
  CardShadow: "shadow-xl hover:shadow-2xl transition duration-300",
};

const DUMMY_STUDENT = {
  materials: [
    "Mechanics PDF V2",
    "Calculus Practice Sheet",
    "Organic Synthesis Flowchart",
  ],
};

const StudyMaterial = () => {
  return (
    <div className="space-y-6">
      <h2 className={`text-3xl font-bold mb-6 ${COLORS.PrimaryText}`}>
        Study Material (Download / View)
      </h2>

      <div className="space-y-4">
        {DUMMY_STUDENT.materials.map((material, index) => (
          <div
            key={index}
            className={`flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 p-4 rounded-lg bg-white border-l-4 border-yellow-500 ${COLORS.CardShadow}`}
          >
            <p className={`font-medium ${COLORS.PrimaryText}`}>
              {material}.pdf
            </p>

            <button
              className={`flex items-center justify-center text-sm font-semibold text-white px-4 py-2 rounded-full ${COLORS.AccentBg}`}
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyMaterial;
