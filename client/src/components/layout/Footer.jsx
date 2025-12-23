import React, { useState } from "react";
import { MapPin, Phone, Mail, ExternalLink, Code2, ChevronRight } from "lucide-react";

const footerLinks = [
    { title: "Home", link: "/" },
    { title: "Admission", link: "/admission" },
    { title: "About Us", link: "/about-us" },
    { title: "Courses", link: "/courses" },
    { title: "FAQ", link: "/faq" },
];

const socialLinks = [
    { name: "YouTube", icon: "▶️", link: "https://youtube.com/", color: "hover:text-orange-400" },
    { name: "Instagram", icon: "📸", link: "https://instagram.com/", color: "hover:text-pink-400" },
    { name: "Facebook", icon: "📘", link: "https://facebook.com/", color: "hover:text-purple-400" },
];

const contactInfo = {
    address: "Chanmari, Lohaghat",
    phone: "+91 98765 43210",
    email: "info@coaching.com",
};

const galleryImages = [
    "/2.png",
    "/2.png",
    "/2.png",
    "/2.png",
    "/2.png",
    "/2.png",
];

const Footer = () => {
    const [hoveredGallery, setHoveredGallery] = useState(null);

    return (
        <footer className="relative bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 text-gray-800 py-12 shadow-2xl overflow-hidden border-t border-gray-300">
            
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-500 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

                    {/* Brand Section */}
                    <div>
                        <h2 className="text-3xl font-extrabold tracking-wide drop-shadow-lg bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent mb-3">
                            Pawan Sir Math's Classes
                        </h2>
                        <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full mb-4"></div>

                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                            Empowering students with quality education & guidance.
                        </p>

                        {/* Social Media */}
                        <h3 className="text-lg font-bold mb-3 text-orange-600">Follow Us</h3>
                        <div className="flex flex-col space-y-2">
                            {socialLinks.map((s) => (
                                <a 
                                    key={s.name} 
                                    href={s.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-2 text-sm text-gray-700 ${s.color} transition-all duration-300 group hover:translate-x-2`}
                                >
                                    <span className="text-xl transform group-hover:scale-125 transition-transform duration-300">{s.icon}</span>
                                    <span>{s.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links + Contact Section */}
                    <div className="grid grid-cols-2 gap-8">

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-lg font-bold mb-4 text-orange-600">Quick Links</h3>
                            <ul className="space-y-2">
                                {footerLinks.map((item) => (
                                    <li key={item.title}>
                                        <a
                                            href={item.link}
                                            className="text-sm flex items-center gap-2 group text-gray-700 hover:text-orange-600 transition-all duration-300 hover:translate-x-1"
                                        >
                                            <div className="w-1 h-1 rounded-full bg-orange-500 group-hover:w-2 transition-all duration-300"></div>
                                            {item.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="text-lg font-bold mb-4 text-orange-600">Contact</h3>
                            <div className="space-y-2 text-sm">
                                <a 
                                    href={`https://maps.google.com/?q=${contactInfo.address}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-2 group text-gray-700 hover:text-pink-600 transition-colors duration-300"
                                >
                                    <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                                    <span>{contactInfo.address}</span>
                                </a>
                                
                                <a 
                                    href={`tel:${contactInfo.phone}`}
                                    className="flex items-center gap-2 group text-gray-700 hover:text-pink-600 transition-colors duration-300"
                                >
                                    <Phone size={16} className="flex-shrink-0" />
                                    <span>{contactInfo.phone}</span>
                                </a>
                                
                                <a 
                                    href={`mailto:${contactInfo.email}`}
                                    className="flex items-center gap-2 group text-gray-700 hover:text-pink-600 transition-colors duration-300"
                                >
                                    <Mail size={16} className="flex-shrink-0" />
                                    <span>{contactInfo.email}</span>
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Gallery Section */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-orange-600">Gallery</h3>
                        <div className="grid grid-cols-3 gap-2">
                            {galleryImages.map((img, index) => (
                                <div 
                                    key={index} 
                                    className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer border border-gray-300 hover:border-orange-500 transition-colors duration-300"
                                    onMouseEnter={() => setHoveredGallery(index)}
                                    onMouseLeave={() => setHoveredGallery(null)}
                                >
                                    <img
                                        src={img}
                                        alt={`Gallery ${index + 1}`}
                                        className="w-full h-20 object-cover rounded-lg transform group-hover:scale-110 group-hover:rotate-2 transition-all duration-500"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t from-orange-500/60 via-pink-500/30 to-transparent transition-opacity duration-300 ${
                                        hoveredGallery === index ? 'opacity-100' : 'opacity-0'
                                    }`}></div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-6"></div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
                    <p className="text-gray-600 text-center md:text-left">
                        © {new Date().getFullYear()} Pawan Sir Math's Classes —
                        <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent font-semibold"> All Rights Reserved.</span>
                    </p>

                    {/* Developer Credit */}
                    <a 
                        href="https://portfolio-delta-roan-4avfh28qqq.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                        <Code2 size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                        <span className="font-semibold text-white">About Developer</span>
                        <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                </div>

            </div>

            {/* Bottom Gradient Border */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600"></div>
        </footer>
    );
};

export default Footer;