import React from "react";

const aboutData = {
  instituteName: "Shakti Coaching Institute",
  city: "Your City Name",
  tagline: "Building Strong Concepts, Delivering Results",
  description:
    "Shakti Coaching Institute is a trusted local coaching center focused on quality education, concept clarity, and result-oriented preparation. We believe in honest teaching, affordable fees, and personal attention to every student.",

  image: {
    src: "1.png",
    alt: "Coaching Center",
  },

  highlights: [
    {
      title: "Experienced Faculty",
      desc: "Highly qualified teachers with years of classroom experience.",
    },
    {
      title: "Result-Oriented Teaching",
      desc: "Focus on exams, practice, and regular performance evaluation.",
    },
    {
      title: "Affordable Fees",
      desc: "Quality education at fees suitable for local families.",
    },
    {
      title: "Personal Attention",
      desc: "Small batches and doubt-clearing sessions for every student.",
    },
  ],
  stats: [
    { label: "Years of Experience", value: "10+" },
    { label: "Students Taught", value: "3000+" },
    { label: "Success Rate", value: "90%" },
    { label: "Batches Running", value: "12+" },
  ],
};


const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-white">

      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white py-14 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            About {aboutData.instituteName}
          </h1>
          <p className="mt-2 text-white/90">
            Trusted local coaching institute in {aboutData.city}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-20">

        {/* Intro */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              {aboutData.tagline}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {aboutData.description}
            </p>
            <button className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg hover:scale-105 transition">
              Visit Our Center
            </button>
          </div>

          {/* Image Dummy */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-indigo-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition"></div>
            <img
              src={aboutData.image.src}
              alt={aboutData.image.alt}
              className="relative rounded-3xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>

        {/* Highlights */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-10">
            Why Choose Us
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutData.highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
              >
                <h4 className="font-semibold text-purple-700 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-10 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {aboutData.stats.map((stat, index) => (
              <div key={index}>
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-sm text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};

export default AboutUs;
