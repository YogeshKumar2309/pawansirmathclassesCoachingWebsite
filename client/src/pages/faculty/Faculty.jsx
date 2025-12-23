import React from "react";
import { Phone, Mail } from "lucide-react";

const facultyData = {
  name: "Pawan Kumar",
  subject: "Mathematics Faculty",
  city: "Lohaghat",
  experience: "5+ Years",
  specialization: "Board Preparation",
  location: "City Center",
  phone: "+919876543210",
  email: "yogesh12lohghat@gmail.com",
  image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
  quote: "Teaching is not about shortcuts, it’s about building strong concepts.",
  details: [
    { label: "Experience", value: "5+ Years" },
    { label: "Subject", value: "Mathematics" },
    { label: "Focus", value: "Board Exams" },
    { label: "Location", value: "Chandmari, Lohaghat, Uttarakhand" },
  ],
};

const Faculty = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-white">

      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white py-14 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">Our Faculty</h1>
          <p className="mt-2 text-white/90">
            Experienced and dedicated teachers you can trust
          </p>
        </div>
      </div>

      {/* Faculty Card */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-indigo-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition"></div>
            <img
              src={facultyData.image}
              alt={facultyData.name}
              className="relative rounded-3xl shadow-2xl w-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                {facultyData.name}
              </h2>
              <p className="text-purple-600 font-medium mt-1">
                {facultyData.subject}
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed">
              {facultyData.name} is a senior Mathematics faculty based in{" "}
              <span className="font-medium text-gray-800">
                {facultyData.city}
              </span>
              , guiding students for more than{" "}
              <span className="font-semibold">
                {facultyData.experience}
              </span>{" "}
              with a strong focus on board exams.
            </p>

            {/* Details */}
            <div className="grid grid-cols-2 gap-4">
              {facultyData.details.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
                >
                  <p className="text-sm text-gray-500">{item.label}</p>
                  <p className="font-semibold text-gray-800">{item.value}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={`tel:${facultyData.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white 
                bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg hover:scale-105 transition"
              >
                <Phone size={18} /> Call Faculty
              </a>

              <a
                href={`mailto:${facultyData.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold 
                text-orange-600 border border-orange-300 hover:bg-orange-50 transition"
              >
                <Mail size={18} /> Email Faculty
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Quote */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xl italic">“{facultyData.quote}”</p>
          <p className="mt-2 font-medium">– {facultyData.name}</p>
        </div>
      </div>

    </div>
  );
};

export default Faculty;
