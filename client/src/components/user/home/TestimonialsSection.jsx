import React, { useEffect, useState } from "react";

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchData = async () => {
    try {
      const res = await fetch(`/reviews/${page}.json`);
      const data = await res.json();

      setTestimonials(data.testimonials);
      setTotalPages(data.totalPages);
    } catch (err) {
      console.log("Error fetching JSON:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <section className="py-24 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-100 relative">
      
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-72 h-72 bg-pink-300/30 blur-3xl rounded-full absolute top-10 left-20"></div>
        <div className="w-72 h-72 bg-purple-400/30 blur-3xl rounded-full absolute bottom-10 right-20"></div>
      </div>

      <div className="relative container mx-auto px-6 z-10">

        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text drop-shadow-sm">
          Student Reviews
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-white/40 p-8 rounded-3xl shadow-xl border border-white/30 transition transform hover:-translate-y-2 hover:shadow-2xl duration-300"
            >
              {/* Profile Image */}
              <div className="flex justify-center mb-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 rounded-full border-4 border-purple-300 shadow-lg object-cover"
                />
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-3">
                {[...Array(item.stars)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl drop-shadow">
                    ★
                  </span>
                ))}
              </div>

              {/* Feedback */}
              <p className="text-gray-700 text-lg leading-relaxed mb-4 text-center italic">
                “{item.feedback}”
              </p>

              {/* Name */}
              <div className="text-center mt-5">
                <h3 className="font-bold text-purple-700 text-xl">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.year}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-6 mt-14">
          
          <button
            onClick={() => page > 1 && setPage(page - 1)}
            disabled={page === 1}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition disabled:opacity-40"
          >
            Previous
          </button>

          <span className="text-xl font-semibold text-purple-700">
            Page {page} / {totalPages}
          </span>

          <button
            onClick={() => page < totalPages && setPage(page + 1)}
            disabled={page === totalPages}
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition disabled:opacity-40"
          >
            Next
          </button>

        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
