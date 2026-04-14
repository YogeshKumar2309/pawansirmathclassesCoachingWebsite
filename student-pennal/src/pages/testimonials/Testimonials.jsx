import React from "react";

const testimonialsData = [
  {
    name: "Amit Kumar",
    role: "Class 10 Student",
    city: "Your City",
    review:
      "The teachers explain concepts very clearly. My Maths score improved a lot after joining this coaching.",
    rating: 5,
  },
  {
    name: "Neha Sharma",
    role: "Class 12 Student",
    city: "Your City",
    review:
      "Regular tests and doubt sessions helped me gain confidence for board exams. Highly recommended.",
    rating: 4,
  },
  {
    name: "Rakesh Verma",
    role: "Parent",
    city: "Your City",
    review:
      "Affordable fees and good teaching quality. Teachers personally take care of students' progress.",
    rating: 5,
  },
  {
    name: "Pooja Singh",
    role: "Class 9 Student",
    city: "Your City",
    review:
      "Best local coaching institute. Friendly teachers and proper guidance.",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-white">

      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white py-14 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            Student & Parent Reviews
          </h1>
          <p className="mt-2 text-white/90">
            What our students and parents say about us
          </p>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              {/* Stars */}
              <div className="flex mb-3">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-600 text-sm leading-relaxed">
                “{item.review}”
              </p>

              {/* User */}
              <div className="mt-5">
                <p className="font-semibold text-gray-800">{item.name}</p>
                <p className="text-sm text-purple-600">
                  {item.role} • {item.city}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-12 text-center text-white">
        <h2 className="text-2xl font-bold">
          Trusted by Students & Parents
        </h2>
        <p className="mt-2 text-white/80">
          Join our coaching and experience quality education
        </p>
        <button
          className="mt-6 px-8 py-3 rounded-xl font-semibold text-white
          bg-gradient-to-r from-yellow-400 to-orange-500
          shadow-lg hover:scale-105 transition"
        >
          Visit Our Center
        </button>
      </div>

    </div>
  );
};

export default Testimonials;
