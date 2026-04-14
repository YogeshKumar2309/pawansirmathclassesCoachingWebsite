import React, { useState, useEffect } from "react";
import { UserCheck, Sparkles, HelpCircle, FileText, CheckCircle, TrendingUp } from "lucide-react";

const features = [
  {
    title: "Personal Attention",
    desc: "Every student gets full attention because there is only 1 dedicated teacher.",
    icon: "👨‍🏫",
    lucideIcon: UserCheck,
    color: "from-orange-400 to-pink-500",
    benefits: ["1-on-1 Focus", "Tailored Learning", "Better Results"]
  },
  {
    title: "Clear Explanations",
    desc: "Concepts are explained in simple language so students understand quickly.",
    icon: "✨",
    lucideIcon: Sparkles,
    color: "from-purple-500 to-indigo-600",
    benefits: ["Simple Terms", "Visual Learning", "Easy to Grasp"]
  },
  {
    title: "Doubt Solving Sessions",
    desc: "Daily and weekly doubt sessions to ensure no student is left behind.",
    icon: "❓",
    lucideIcon: HelpCircle,
    color: "from-yellow-400 to-orange-500",
    benefits: ["Daily Support", "Quick Resolution", "No Confusion"]
  },
  {
    title: "Regular Tests & Material",
    desc: "Weekly tests and high-quality practice sheets for exam preparation.",
    icon: "📘",
    lucideIcon: FileText,
    color: "from-pink-400 to-purple-500",
    benefits: ["Weekly Tests", "Quality Material", "Exam Ready"]
  },
];

const FeaturesSection = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [activeCard, setActiveCard] = useState(null);

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

    const cards = document.querySelectorAll('.feature-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-white via-orange-50 to-pink-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      
      {/* Floating Icons */}
      <div className="absolute top-20 left-10 text-4xl opacity-10 animate-bounce">📚</div>
      <div className="absolute bottom-20 right-20 text-4xl opacity-10 animate-bounce delay-500">🎓</div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <TrendingUp className="w-8 h-8 text-orange-500" />
            <span className="text-orange-600 font-semibold uppercase tracking-wider text-sm">Our Advantages</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience the difference with our unique teaching approach and personalized care
          </p>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, i) => {
            const LucideIcon = feature.lucideIcon;
            return (
              <div
                key={i}
                data-index={i}
                className={`feature-card group relative transition-all duration-700 ${
                  visibleCards.includes(i) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
                onMouseEnter={() => setActiveCard(i)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Main Card */}
                <div className={`relative h-full p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${feature.color} text-white overflow-hidden transform hover:-translate-y-3 hover:rotate-1`}>
                  
                  {/* Animated Background Circles */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-white rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-white rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icons Container */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-5xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                        {feature.icon}
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl group-hover:bg-white/30 transition-colors duration-300">
                        <LucideIcon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-200 transition-colors duration-300">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/90 text-sm leading-relaxed mb-4">
                      {feature.desc}
                    </p>

                    {/* Benefits List - Appears on Hover */}
                    <div className={`space-y-2 transition-all duration-500 ${
                      activeCard === i ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'
                    }`}>
                      <div className="h-px bg-white/30 mb-3"></div>
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                  {/* Corner Accent */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-white/10 rounded-tl-full transform group-hover:scale-150 transition-transform duration-500"></div>
                </div>

                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center font-bold text-xl text-gray-700 group-hover:scale-110 transition-transform duration-300 border-4 border-white">
                  {i + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { number: "500+", label: "Happy Students" },
            { number: "95%", label: "Success Rate" },
            { number: "10+", label: "Years Experience" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, i) => (
            <div 
              key={i}
              className={`text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                visibleCards.includes(i) ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{ transitionDelay: `${600 + i * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;