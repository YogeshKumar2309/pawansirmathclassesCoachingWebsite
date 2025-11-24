import React from "react";

// Teacher की details
const teacherInfo = {
  name: "Pawan Kumar",
  experiences: [
    "5+ years teaching Class 9–12 Math",
    "5+ years teaching Class 9–12 Science",
    "Teaching all subjects up to Class 8"
  ],
  qualification: "B.A. in Mathematics",
  bio: "Pawan Sir believes in clear explanation, personalized attention, and helping every student achieve their best results.",
  image: "pawanSir.png",
  subjects: ["Math", "Science", "English", "Social Studies"]
};

const AboutTheTeacherSection = () => {
  const teacherArray = [teacherInfo];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
          About The Teacher
        </h2>

        {teacherArray.map((teacher, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-10 bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Photo Left */}
            <div className="flex-shrink-0">
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover border-4 border-gradient-to-tr from-purple-500 to-indigo-600"
              />
            </div>

            {/* Details Right */}
            <div className="flex-1 flex flex-col gap-4 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-semibold text-purple-700">
                {teacher.name}
              </h3>

              {/* Experiences */}
              <div className="flex flex-col gap-2">
                {teacher.experiences.map((exp, i) => (
                  <p key={i} className="text-gray-700 md:text-gray-800">
                    {exp}
                  </p>
                ))}
              </div>

              {/* Qualification */}
              <p className="text-gray-600 md:text-gray-700">{teacher.qualification}</p>

              {/* Subjects */}
              <div className="flex flex-wrap gap-2 mt-2">
                {teacher.subjects.map((sub, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-full text-sm font-medium shadow-sm"
                  >
                    {sub}
                  </span>
                ))}
              </div>

              {/* Bio */}
              <p className="mt-4 text-gray-500 md:text-gray-600">{teacher.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutTheTeacherSection;
