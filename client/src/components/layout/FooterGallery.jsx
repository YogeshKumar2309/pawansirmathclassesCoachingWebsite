const FooterGallery = ({ images, hoveredGallery, setHoveredGallery }) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {images.map((img, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer border border-gray-300 hover:border-orange-500 transition-colors duration-300"
          onMouseEnter={() => setHoveredGallery(index)}
          onMouseLeave={() => setHoveredGallery(null)}
        >
          <img
            src={img}
            alt={`Gallery ${index + 1}`}
            loading="lazy"
            className="w-full h-20 object-cover rounded-lg transform group-hover:scale-110 group-hover:rotate-2 transition-all duration-500"
          />
        </div>
      ))}
    </div>
  );
};

export default FooterGallery;
