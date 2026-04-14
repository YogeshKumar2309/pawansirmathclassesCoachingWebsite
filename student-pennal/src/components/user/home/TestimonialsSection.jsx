import React, { useEffect, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, Users } from "lucide-react";

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [visibleCards, setVisibleCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    setVisibleCards([]);
    try {
      const res = await fetch(`/reviews/${page}.json`);
      const data = await res.json();

      setTestimonials(data.testimonials);
      setTotalPages(data.totalPages);
      
      // Trigger staggered animation after data loads
      setTimeout(() => {
        data.testimonials.forEach((_, index) => {
          setTimeout(() => {
            setVisibleCards(prev => [...prev, index]);
          }, index * 150);
        });
      }, 100);
    } catch (err) {
      console.log("Error fetching JSON:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-100 relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-96 h-96 bg-pink-300/30 blur-3xl rounded-full absolute top-10 left-20 animate-pulse"></div>
        <div className="w-96 h-96 bg-purple-400/30 blur-3xl rounded-full absolute bottom-10 right-20 animate-pulse delay-1000"></div>
        <div className="w-64 h-64 bg-indigo-300/20 blur-3xl rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse delay-500"></div>
      </div>

      {/* Floating Quote Icons */}
      <div className="absolute top-20 left-10 text-purple-200 opacity-20">
        <Quote size={80} />
      </div>
      <div className="absolute bottom-20 right-10 text-pink-200 opacity-20 transform rotate-180">
        <Quote size={80} />
      </div>

      <div className="relative container mx-auto px-6 z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Users className="w-8 h-8 text-purple-600" />
            <span className="text-purple-600 font-semibold uppercase tracking-wider text-sm">What Our Students Say</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 text-transparent bg-clip-text drop-shadow-sm mb-4">
            Student Reviews
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real feedback from students who have experienced our teaching methods
          </p>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
          </div>
        )}

        {/* Testimonials Grid */}
        {!isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className={`group relative backdrop-blur-xl bg-white/50 p-8 rounded-3xl shadow-xl border-2 border-white/40 transition-all duration-700 hover:shadow-2xl hover:border-purple-200 ${
                  visibleCards.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
              >
                {/* Quote Icon Background */}
                <div className="absolute top-4 right-4 text-purple-200 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                  <Quote size={40} />
                </div>

                {/* Profile Image */}
                <div className="flex justify-center mb-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="relative w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Stars */}
                <div className="flex justify-center mb-4 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={`${
                        i < item.stars
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300'
                      } drop-shadow transition-all duration-300 group-hover:scale-110`}
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>

                {/* Feedback */}
                <div className="relative">
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 text-center italic">
                    "{item.feedback}"
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent mb-5"></div>

                {/* Name & Year */}
                <div className="text-center">
                  <h3 className="font-bold text-purple-700 text-xl mb-1 group-hover:text-purple-900 transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm font-medium">{item.year}</p>
                </div>

                {/* Hover Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-16">
          
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1 || isLoading}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 font-semibold"
          >
            <ChevronLeft size={20} />
            Previous
          </button>

          {/* Page Numbers */}
          <div className="flex items-center gap-3">
            {[...Array(totalPages)].map((_, i) => {
              const pageNum = i + 1;
              // Show current, first, last, and adjacent pages
              if (
                pageNum === 1 ||
                pageNum === totalPages ||
                Math.abs(pageNum - page) <= 1
              ) {
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    disabled={isLoading}
                    className={`w-10 h-10 rounded-lg font-semibold transition-all duration-300 ${
                      page === pageNum
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-110'
                        : 'bg-white/60 text-gray-700 hover:bg-white hover:scale-105'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              } else if (Math.abs(pageNum - page) === 2) {
                return <span key={pageNum} className="text-gray-400">...</span>;
              }
              return null;
            })}
          </div>

          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages || isLoading}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 font-semibold"
          >
            Next
            <ChevronRight size={20} />
          </button>

        </div>

        {/* Page Info */}
        <div className="text-center mt-6">
          <span className="text-lg font-semibold text-purple-700 bg-white/60 px-6 py-2 rounded-full shadow-md">
            Page {page} of {totalPages}
          </span>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;