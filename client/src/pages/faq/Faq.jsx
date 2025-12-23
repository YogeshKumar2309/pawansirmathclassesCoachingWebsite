import React, { useState } from "react";
import EnquireForm from "../../components/common/EnquireForm";

const faqData = [
  {
    question: "What are the batch timings for different classes?",
    answer:
      "We offer multiple batches for all classes. You can check the schedule page for exact timings and select a batch that suits your convenience.",
  },
  {
    question: "Do you provide demo classes?",
    answer:
      "Yes! Every new student can attend a free demo class before enrolling in any course.",
  },
  {
    question: "How can I enroll in a course?",
    answer:
      "You can contact us via phone, WhatsApp, or visit our center to complete the enrollment process.",
  },
  {
    question: "Are study materials provided?",
    answer:
      "Yes, all students enrolled in our courses get complete study material and notes for their respective subjects.",
  },
  {
    question: "Do you prepare for competitive exams as well?",
    answer:
      "Yes, we provide integrated preparation for competitive exams along with board exams for higher classes.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
    const [isActiveForm, setIsActiveForm] = useState(false);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-white">

      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white py-14 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h1>
          <p className="mt-2 text-white/90">Answers to common queries of our students and parents</p>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 cursor-pointer hover:shadow-xl transition"
            onClick={() => toggleIndex(index)}
          >
            <h3 className="text-lg font-semibold text-gray-800 flex justify-between items-center">
              {item.question}
              <span className="text-purple-600 font-bold">
                {activeIndex === index ? "−" : "+"}
              </span>
            </h3>
            {activeIndex === index && (
              <p className="mt-4 text-gray-600">{item.answer}</p>
            )}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-12 text-center text-white">
        <h2 className="text-2xl font-bold">Still Have Questions?</h2>
        <p className="mt-2 text-white/80">Contact us directly for more information</p>
             {isActiveForm ?
          <EnquireForm msgTitle={"Ask Questions"} submitText={"Question"}/> :  <button 
          onClick={() => setIsActiveForm(true)}
          className="mt-6 px-8 py-3 rounded-xl font-semibold text-white
          bg-gradient-to-r from-yellow-400 to-orange-500
          shadow-lg hover:scale-105 transition">
          Contact Now
        </button>}
       
      </div>

    </div>
  );
};

export default FAQ;
