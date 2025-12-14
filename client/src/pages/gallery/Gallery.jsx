import React from "react";

const galleryData = [
  { title: "Classroom Session", img: "1.png" },
  { title: "Mathematics Workshop", img: "1.png" },
  { title: "Science Lab Activity", img: "1.png" },
  { title: "Board Exam Preparation", img: "1.png" },
  { title: "Parent-Teacher Interaction", img: "1.png" },
  { title: "Weekly Test & Practice", img: "1.png" },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-white">

      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white py-14 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">Gallery</h1>
          <p className="mt-2 text-white/90">
            Peek into our coaching center activities and events
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryData.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition group"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-white font-semibold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-12 text-center text-white">
        <h2 className="text-2xl font-bold">Experience Our Coaching Atmosphere</h2>
        <p className="mt-2 text-white/80">Join us to see how we create a fun & effective learning environment</p>
        <button className="mt-6 px-8 py-3 rounded-xl font-semibold text-white
          bg-gradient-to-r from-yellow-400 to-orange-500
          shadow-lg hover:scale-105 transition">
          Book a Visit
        </button>
      </div>

    </div>
  );
};

export default Gallery;
