import React from "react";

const contactData = {
  address: "123, Central Street, Your City, Pin 123456",
  phone: "+91 98765 43210",
  whatsapp: "+91 98765 43210",
  email: "info@shakticoaching.com",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.123456!2d76.123456!3d28.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c1234567abcd%3A0x123456abcdef!2sShakti%20Coaching%20Institute!5e0!3m2!1sen!2sin!4v1234567890",
};

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-white">

      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white py-14 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            Contact Us
          </h1>
          <p className="mt-2 text-white/90">
            Get in touch with Shakti Coaching Institute
          </p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-start">
        
        {/* Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Reach Us</h2>
          <p className="text-gray-600 leading-relaxed">
            {contactData.address}
          </p>

          <p className="text-gray-600 leading-relaxed">
            Phone: <a href={`tel:${contactData.phone}`} className="text-purple-600 font-medium">{contactData.phone}</a>
          </p>

          <p className="text-gray-600 leading-relaxed">
            WhatsApp: <a href={`https://wa.me/${contactData.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className="text-green-600 font-medium">{contactData.whatsapp}</a>
          </p>

          <p className="text-gray-600 leading-relaxed">
            Email: <a href={`mailto:${contactData.email}`} className="text-purple-600 font-medium">{contactData.email}</a>
          </p>

          <button className="mt-4 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg hover:scale-105 transition">
            Visit Our Center
          </button>
        </div>

        {/* Map */}
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <iframe
            src={contactData.mapEmbed}
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            className="border-0"
            title="Coaching Institute Map"
          ></iframe>
        </div>

      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-12 text-center text-white">
        <h2 className="text-2xl font-bold">
          Ready to Join Our Coaching?
        </h2>
        <p className="mt-2 text-white/80">
          Contact us now or visit our center for more details
        </p>
        <button className="mt-6 px-8 py-3 rounded-xl font-semibold text-white
          bg-gradient-to-r from-yellow-400 to-orange-500
          shadow-lg hover:scale-105 transition">
          Enquire Now
        </button>
      </div>

    </div>
  );
};

export default ContactUs;
