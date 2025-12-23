import React, { useState } from "react";
import { Clock, Calendar, MapPin, Users, Book, Filter } from "lucide-react";

const scheduleData = [
  {
    className: "Class 6 – 8",
    color: "from-orange-400 to-pink-500",
    batches: [
      {
        subject: "Mathematics",
        time: "4:00 PM – 5:00 PM",
        days: "Mon, Wed, Fri",
        location: "Center 1 – Main Branch",
        instructor: "Mr. Sharma",
        seats: "15/20",
      },
      {
        subject: "Science",
        time: "5:00 PM – 6:00 PM",
        days: "Tue, Thu, Sat",
        location: "Center 2 – City Branch",
        instructor: "Ms. Verma",
        seats: "12/20",
      },
      {
        subject: "English",
        time: "3:00 PM – 4:00 PM",
        days: "Mon, Wed, Fri",
        location: "Center 1 – Main Branch",
        instructor: "Mrs. Gupta",
        seats: "10/20",
      },
    ],
  },
  {
    className: "Class 9 – 10",
    color: "from-purple-500 to-indigo-600",
    batches: [
      {
        subject: "Mathematics",
        time: "6:00 PM – 7:30 PM",
        days: "Mon, Wed, Fri",
        location: "Center 1 – Main Branch",
        instructor: "Mr. Kumar",
        seats: "18/25",
      },
      {
        subject: "Science",
        time: "7:30 PM – 9:00 PM",
        days: "Tue, Thu, Sat",
        location: "Center 2 – City Branch",
        instructor: "Dr. Singh",
        seats: "20/25",
      },
      {
        subject: "English",
        time: "5:00 PM – 6:00 PM",
        days: "Mon, Wed, Fri",
        location: "Center 2 – City Branch",
        instructor: "Ms. Patel",
        seats: "14/20",
      },
    ],
  },
  {
    className: "Class 11 – 12",
    color: "from-yellow-400 to-orange-500",
    batches: [
      {
        subject: "Maths (11th)",
        time: "6:00 AM – 7:30 AM",
        days: "Mon, Wed, Fri",
        location: "Center 1 – Main Branch",
        instructor: "Prof. Mishra",
        seats: "22/30",
      },
      {
        subject: "Maths (12th)",
        time: "7:30 AM – 9:00 AM",
        days: "Tue, Thu, Sat",
        location: "Center 1 – Main Branch",
        instructor: "Prof. Mishra",
        seats: "25/30",
      },
      {
        subject: "Physics (11th)",
        time: "4:00 PM – 5:30 PM",
        days: "Mon, Wed, Fri",
        location: "Center 2 – City Branch",
        instructor: "Dr. Rao",
        seats: "15/25",
      },
      {
        subject: "Chemistry (12th)",
        time: "5:30 PM – 7:00 PM",
        days: "Tue, Thu, Sat",
        location: "Center 2 – City Branch",
        instructor: "Dr. Joshi",
        seats: "18/25",
      },
    ],
  },
];

const Schedule = () => {
  const [selectedClass, setSelectedClass] = useState("all");
  const [selectedCenter, setSelectedCenter] = useState("all");

  // Get current date
  const getCurrentDate = () => {
    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleString('default', { month: 'short' });
    const year = now.getFullYear();
    const weekday = now.toLocaleString('default', { weekday: 'short' });
    
    return { day, month, year, weekday };
  };

  const { day, month, year, weekday } = getCurrentDate();

  const filteredData = scheduleData.filter(section => {
    if (selectedClass === "all") return true;
    return section.className === selectedClass;
  }).map(section => ({
    ...section,
    batches: section.batches.filter(batch => {
      if (selectedCenter === "all") return true;
      return batch.location.includes(selectedCenter);
    })
  })).filter(section => section.batches.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white py-20 shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border-4 border-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-white rounded-full animate-pulse delay-150"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          {/* Animated Date Display */}
          <div className="inline-flex flex-col items-center justify-center mb-4 bg-white/20 backdrop-blur-md rounded-3xl p-6 shadow-2xl animate-bounce">
            <div className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-1">
              {weekday}
            </div>
            <div className="text-6xl font-bold text-white leading-none mb-1">
              {day}
            </div>
            <div className="text-lg font-semibold text-white/90">
              {month} {year}
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4">Class Schedule</h1>
          <p className="text-xl text-white/90">
            Find the perfect batch timing for your learning journey
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-6xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="text-orange-500" size={24} />
            <h3 className="text-lg font-semibold text-gray-800">Filter Batches</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Class Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Class
              </label>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
              >
                <option value="all">All Classes</option>
                <option value="Class 6 – 8">Class 6 – 8</option>
                <option value="Class 9 – 10">Class 9 – 10</option>
                <option value="Class 11 – 12">Class 11 – 12</option>
              </select>
            </div>

            {/* Center Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Center
              </label>
              <select
                value={selectedCenter}
                onChange={(e) => setSelectedCenter(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
              >
                <option value="all">All Centers</option>
                <option value="Center 1">Center 1 – Main Branch</option>
                <option value="Center 2">Center 2 – City Branch</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Content */}
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-14">
        {filteredData.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">No batches found</h3>
            <p className="text-gray-600">Try changing your filters</p>
          </div>
        ) : (
          filteredData.map((section, index) => (
            <div key={index}>
              <div className="flex items-center gap-4 mb-8">
                <div className={`h-1 flex-grow rounded-full bg-gradient-to-r ${section.color}`}></div>
                <h2 className={`text-3xl font-bold bg-gradient-to-r ${section.color} bg-clip-text text-transparent whitespace-nowrap`}>
                  {section.className}
                </h2>
                <div className={`h-1 flex-grow rounded-full bg-gradient-to-r ${section.color}`}></div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.batches.map((batch, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-transparent hover:border-orange-500"
                  >
                    {/* Subject Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className={`text-xl font-bold bg-gradient-to-r ${section.color} bg-clip-text text-transparent`}>
                          {batch.subject}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">{batch.instructor}</p>
                      </div>
                      <Book className={`text-orange-500`} size={24} />
                    </div>

                    {/* Batch Details */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-gray-700">
                        <Clock className="text-orange-500 flex-shrink-0" size={18} />
                        <span className="font-medium text-sm">{batch.time}</span>
                      </div>

                      <div className="flex items-center gap-3 text-gray-700">
                        <Calendar className="text-purple-500 flex-shrink-0" size={18} />
                        <span className="text-sm">{batch.days}</span>
                      </div>

                      <div className="flex items-center gap-3 text-gray-700">
                        <MapPin className="text-pink-500 flex-shrink-0" size={18} />
                        <span className="text-sm">{batch.location}</span>
                      </div>

                      <div className="flex items-center gap-3 text-gray-700">
                        <Users className="text-indigo-500 flex-shrink-0" size={18} />
                        <span className="text-sm font-medium">
                          Available Seats: {batch.seats}
                        </span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button className={`w-full mt-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r ${section.color} hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
                      Enroll Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Location Footer */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-10">Our Centers</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-yellow-300" size={32} />
                <h4 className="text-2xl font-bold">Center 1 – Main Branch</h4>
              </div>
              <p className="text-white/90 text-lg mb-3">Near Bus Stand, Main Road</p>
              <p className="text-white/80">📞 +91 98765 43210</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-yellow-300" size={32} />
                <h4 className="text-2xl font-bold">Center 2 – City Branch</h4>
              </div>
              <p className="text-white/90 text-lg mb-3">City Market, Opposite Bank</p>
              <p className="text-white/80">📞 +91 98765 43211</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Info Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-lg">
            💡 <strong>New Batches Starting Soon!</strong> Limited seats available. Enroll now to secure your spot.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Schedule;