import React from "react";

const footerLinks = [
    { title: "Home", link: "/" },
    { title: "Admission", link: "/admission" },
    { title: "About Us", link: "/about-us" },
    { title: "Courses", link: "/courses" },
    { title: "FAQ", link: "/faq" },
];

const socialLinks = [
    { name: "YouTube", icon: "▶️", link: "https://youtube.com/" },
    { name: "Instagram", icon: "📸", link: "https://instagram.com/" },
    { name: "Facebook", icon: "📘", link: "https://facebook.com/" },
];

const contactInfo = {
    address: "📍 Chanmari, Lohaghat",
    phone: "📞 +91 98765 43210",
    email: "📧 info@coaching.com",
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
    return (
        <footer className="bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600
 text-white py-14 shadow-2xl">

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* Brand Section */}
                <div>
                    <h2 className="text-4xl font-extrabold tracking-wide drop-shadow-lg text-yellow-300">
                       Pawan sir Math's Classes
                    </h2>

                    <p className="text-gray-200 mt-3 text-lg">
                        Empowering students with quality education & guidance.
                    </p>

                    {/* Social Media */}
                    <h3 className="text-xl font-bold mt-10 mb-4 text-orange-300">Follow Us</h3>
                    <div className="flex flex-col space-y-3">
                        {socialLinks.map((s) => (
                            <a key={s.name} href={s.link}
                                className="flex items-center gap-2 text-lg hover:text-yellow-300 transition">
                                <span className="text-3xl">{s.icon}</span> {s.name}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Links + Contact Section */}
                <div className="grid grid-cols-2 gap-10">

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-orange-300">Quick Links</h3>
                        <ul className="space-y-3">
                            {footerLinks.map((item) => (
                                <li key={item.title}>
                                    <a
                                        href={item.link}
                                        className="hover:text-yellow-300 transition duration-200"
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-orange-300">Contact</h3>
                        <p className="text-gray-200">{contactInfo.address}</p>
                        <p className="text-gray-200 mt-1">{contactInfo.phone}</p>
                        <p className="text-gray-200 mt-1">{contactInfo.email}</p>
                    </div>

                </div>

                {/* Gallery Section */}
                <div>
                    <h3 className="text-xl font-bold mb-4 text-orange-300">Gallery</h3>

                    <div className="grid grid-cols-3 gap-3">
                        {galleryImages.map((img, index) => (
                            <div key={index} className="relative overflow-hidden rounded-xl shadow-md group">
                                <img
                                    src={img}
                                    alt="Gallery"
                                    className="w-full h-24 object-cover rounded-xl transform group-hover:scale-110 transition duration-500"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Bottom */}
            <div className="text-center text-gray-200 mt-12 border-t border-white/20 pt-6">
                © {new Date().getFullYear()} Coaching Institute —
                <span className="text-yellow-300"> All Rights Reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;
