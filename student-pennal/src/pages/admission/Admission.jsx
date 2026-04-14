import React from "react";
import { CheckCircle, Phone, Mail } from "lucide-react";

const steps = [
  {
    title: "Step 1: Contact Us",
    desc: "Call, email or visit our institute to get complete course details.",
  },
  {
    title: "Step 2: Counseling Session",
    desc: "Free counseling to choose the right course & class for the student.",
  },
  {
    title: "Step 3: Demo Class",
    desc: "Attend a free demo class to experience our teaching quality.",
  },
  {
    title: "Step 4: Admission Confirmation",
    desc: "Fill admission form, submit documents & confirm your seat.",
  },
];

const Admission = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* 🔥 Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Admission Process
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Follow these simple steps to take admission and start your learning
            journey with us.
          </p>
        </div>

        {/* 📌 Steps */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="text-pink-500 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🎓 Eligibility Section */}
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-3xl p-10 mb-16 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Eligibility</h2>
          <ul className="space-y-3 text-white/90">
            <li>• Classes available from Class 6 to 12</li>
            <li>• Board exam focused batches</li>
            <li>• Competitive preparation friendly environment</li>
          </ul>
        </div>

        {/* 📞 Contact / CTA */}
        <div className="bg-white rounded-3xl p-10 shadow-lg text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Take Admission?
          </h2>
          <p className="text-gray-600 mb-8">
            Contact us today for free counseling and demo class.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white
              bg-gradient-to-r from-yellow-400 to-orange-500 hover:scale-105 transition-transform shadow-lg"
            >
              <Phone size={20} /> Call Now
            </a>

            <a
              href="mailto:yogesh12lohghat@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold
              bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:scale-105 transition-transform shadow-lg"
            >
              <Mail size={20} /> Email Us
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Admission;
