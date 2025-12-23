import React from "react";

const TopNavCourses = ({ activeTab, onTabClick }) => {
  const tabs = [
    { id: "math", title: "Mathematics" },
    { id: "science", title: "Science" },
    { id: "english", title: "English" },
    { id: "allSubjects", title: "All Subjects" },
  ];

  return (
    <div className="bg-white shadow-md sticky top-18 z-40">
      <div className="container mx-auto px-4 flex gap-4 overflow-x-auto py-6 md:pt-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabClick(tab.id)}
            className={`py-2 px-4 font-semibold rounded-full transition-all duration-300 whitespace-nowrap 
              ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TopNavCourses;
