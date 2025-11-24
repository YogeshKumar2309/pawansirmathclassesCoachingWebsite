import React from "react";

const features = [
  {
    title: "Personal Attention",
    desc: "Every student gets full attention because there is only 1 dedicated teacher.",
    icon: "👨‍🏫",
    color: "from-orange-400 to-pink-500",
  },
  {
    title: "Clear Explanations",
    desc: "Concepts are explained in simple language so students understand quickly.",
    icon: "✨",
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "Doubt Solving Sessions",
    desc: "Daily and weekly doubt sessions to ensure no student is left behind.",
    icon: "❓",
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Regular Tests & Material",
    desc: "Weekly tests and high-quality practice sheets for exam preparation.",
    icon: "📘",
    color: "from-pink-400 to-purple-500",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
          Why Choose Us?
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${feature.color} text-white hover:scale-105`}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
