import React from "react";
import { MapPin, Phone } from "lucide-react";

const aboutData = {
  instituteName: "Pawan Sir Maths Classes",
  city: "Lohaghat",
  tagline: "Building Strong Concepts, Delivering Results",
  description:
    "Pawan Sir Maths Classes is a trusted local coaching center focused on quality education, strong concept clarity, and result-oriented preparation. We believe in honest teaching, affordable fees, and personal attention to every student so that no one is left behind.",

  image: {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfjh2sYMCDBin6cqaQh2ejAzqfu_7o6jn09A&s",
    alt: "Pawan Sir Maths Classes",
  },

  highlights: [
    {
      title: "Experienced Faculty",
      desc: "Highly qualified teachers with years of classroom teaching experience.",
    },
    {
      title: "Result-Oriented Teaching",
      desc: "Regular tests, exam-focused preparation, and performance tracking.",
    },
    {
      title: "Affordable Fees",
      desc: "Quality education at fees suitable for every local family.",
    },
    {
      title: "Personal Attention",
      desc: "Small batches with dedicated doubt-clearing sessions.",
    },
  ],

  stats: [
    { label: "Years of Experience", value: "5+" },
    { label: "Students Taught", value: "500+" },
    { label: "Success Rate", value: "90%" },
    { label: "Active Batches", value: "5+" },
  ],
};

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-white">

      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white py-16 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            About {aboutData.instituteName}
          </h1>
          <p className="mt-2 text-white/90">
            Trusted coaching institute in {aboutData.city}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-20 space-y-24">

        {/* Intro */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              {aboutData.tagline}
            </h2>

            <p className="text-gray-600 leading-relaxed">
              {aboutData.description}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://www.google.com/maps/place/Pawan+Sir+Maths+Classes/@29.4047302,80.0873876,17z/data=!3m1!4b1!4m6!3m5!1s0x39a0e1006b5e0a61:0xd8bb650f21d020d5!8m2!3d29.4047302!4d80.0873876!16s%2Fg%2F11wtgz67tl?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl 
                font-semibold text-white bg-gradient-to-r from-yellow-400 to-orange-500 
                shadow-lg hover:scale-105 transition"
              >
                <MapPin size={18} /> Visit Our Center
              </a>

              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl 
                font-semibold text-orange-600 border border-orange-300 
                hover:bg-orange-50 transition"
              >
                <Phone size={18} /> Contact Us
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-indigo-500 
              rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition">
            </div>
            <img
              src={aboutData.image.src}
              alt={aboutData.image.alt}
              className="relative rounded-3xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-12">
            Why Choose Us
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutData.highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 
                hover:shadow-xl hover:-translate-y-1 transition"
              >
                <h4 className="font-semibold text-purple-700 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-12 text-white shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {aboutData.stats.map((stat, index) => (
              <div key={index}>
                <p className="text-3xl md:text-4xl font-bold">
                  {stat.value}
                </p>
                <p className="text-sm text-white/80 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
