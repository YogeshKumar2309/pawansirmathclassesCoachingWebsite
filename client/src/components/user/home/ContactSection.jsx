import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
          Contact Us
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
          Have questions or want to join our courses? Reach out anytime — we are here to help!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Email */}
          <div className="p-8 bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl hover:scale-[1.02] transition">
            <Mail size={50} className="text-purple-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800">Email</h3>
            <p className="text-gray-600 text-lg mt-1">support@example.com</p>
          </div>

          {/* Phone */}
          <div className="p-8 bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl hover:scale-[1.02] transition">
            <Phone size={50} className="text-purple-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800">Phone</h3>
            <p className="text-gray-600 text-lg mt-1">+91 9876543210</p>
          </div>

          {/* Address */}
          <div className="p-8 bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl hover:scale-[1.02] transition">
            <MapPin size={50} className="text-purple-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800">Location</h3>
            <p className="text-gray-600 text-lg mt-1">Lohaghat, India</p>
          </div>
        </div>

        {/* Embedded Google Map */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-purple-700">
            Find Us on the Map
          </h3>

          <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-purple-200">

            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3475.8231140662638!2d80.08738760000001!3d29.4047302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0e1006b5e0a61%3A0xd8bb650f21d020d5!2sPawan%20Sir%20Maths%20Classes!5e0!3m2!1sen!2sin!4v1764000215658!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            ></iframe>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
