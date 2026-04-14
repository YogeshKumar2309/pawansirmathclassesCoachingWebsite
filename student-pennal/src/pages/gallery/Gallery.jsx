import React from "react";

const galleryData = [
  {
    title: "Mathematics Workshop",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
  },
  {
    title: "Science Lab Activity",
    img: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0"
  },
  {
    title: "Board Exam Preparation",
    img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df"
  },
  {
    title: "Parent-Teacher Interaction",
    img: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9"
  },
  {
    title: "Weekly Test & Practice",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7"
  },
  {
    title: "Group Study Session",
    img: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
  },
  {
    title: "Computer Lab Class",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
  },
  {
    title: "Library Study Time",
    img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353"
  },
  {
    title: "Practical Learning",
    img: "https://images.unsplash.com/photo-1588072432836-e10032774350"
  },
  {
    title: "Exam Discussion",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
  },
  {
    title: "Student Presentation",
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655"
  },
  {
    title: "Workshop Training",
    img: "https://images.unsplash.com/photo-1543269865-cbf427effbad"
  },
  {
    title: "Classroom Interaction",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
  },
  {
    title: "Academic Environment",
    img: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca"
  }
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
      loading="lazy"
      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
    />
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
      <h3 className="text-white font-semibold">{item.title}</h3>
    </div>
  </div>
))}

      </div>

     

    </div>
  );
};

export default Gallery;
