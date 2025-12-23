import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, ExternalLink } from "lucide-react";

const ContactSection = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll('.contact-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "yogesh12lohghat@gmail.com",
      link: "mailto:yogesh12lohghat@gmail.com",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      description: "Send us an email anytime"
    },

    {
      icon: Phone,
      title: "Phone",
      value: "+91 9876543210",
      link: "tel:+919876543210",
      color: "from-blue-500 to-purple-500",
      bgColor: "bg-blue-50",
      description: "Call us for immediate help"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Lohaghat, India",
      link: "https://www.google.com/maps/place/Pawan+Sir+Maths+Classes/@29.4047302,80.0830103,16z/data=!4m6!3m5!1s0x39a0e1006b5e0a61:0xd8bb650f21d020d5!8m2!3d29.4047302!4d80.0873876!16s%2Fg%2F11wtgz67tl?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D",
      color: "from-pink-500 to-orange-500",
      bgColor: "bg-pink-50",
      description: "Visit our coaching center"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <MessageCircle className="w-8 h-8 text-purple-600" />
            <span className="text-purple-600 font-semibold uppercase tracking-wider text-sm">Get in Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions or want to join our courses? Reach out anytime — we are here to help!
          </p>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <div
                key={index}
                data-index={index}
                className={`contact-card group transition-all duration-700 ${visibleCards.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <a
                  href={contact.link}
                  target={contact.link.startsWith("http") ? "_blank" : "_self"}
                  rel={contact.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block h-full relative z-20"
                >

                  <div className={`relative h-full p-8 ${contact.bgColor} backdrop-blur-xl shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 hover:scale-105 border-2 border-white/50`}>

                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center text-center">
                      {/* Icon Container */}
                      <div className={`w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br ${contact.color} flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                        <Icon size={36} className="text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        {contact.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-gray-500 mb-4">
                        {contact.description}
                      </p>

                      {/* Value */}
                      <p className={`text-lg font-semibold bg-gradient-to-r ${contact.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                        {contact.value}
                      </p>

                      {/* External Link Icon */}
                      <div className={`mt-4 transition-all duration-300 ${hoveredCard === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                        }`}>
                        <ExternalLink className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>

        {/* Two Column Layout: Form + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

          {/* Contact Form */}
          {/* <div className="bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border-2 border-white/50">
            <div className="flex items-center gap-3 mb-6">
              <Send className="w-6 h-6 text-purple-600" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Send a Message</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors duration-300"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Your Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors duration-300"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Your Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us how we can help you"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div> */}

          {/* Additional Info */}
          {/* <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl border-2 border-white/50">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-purple-600" />
                <h3 className="text-2xl font-bold text-gray-800">Office Hours</h3>
              </div>
              <div className="space-y-3 text-gray-600">
                <p className="flex justify-between">
                  <span className="font-semibold">Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-semibold">Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-semibold">Sunday:</span>
                  <span>Closed</span>
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-8 rounded-3xl shadow-xl text-white">
              <h3 className="text-2xl font-bold mb-4">Quick Response</h3>
              <p className="mb-4 text-white/90">
                We typically respond within 24 hours. For urgent inquiries, please call us directly.
              </p>
              <div className="flex items-center gap-2 text-yellow-300">
                <MessageCircle className="w-5 h-5" />
                <span className="font-semibold">Average response time: 2 hours</span>
              </div>
            </div>
          </div> */}
        </div>

        {/* Google Map */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
              Find Us on the Map
            </h3>
            <p className="text-gray-600">Visit us at our location in Lohaghat</p>
          </div>

          <div className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 hover:scale-[1.01] transition-transform duration-500">
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

