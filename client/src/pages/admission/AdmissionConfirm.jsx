import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const courseMap = {
  1: { name: "Class 6 Foundation", fees: "₹12,000" },
  2: { name: "Class 7 Concept Builder", fees: "₹13,000" },
  3: { name: "Class 8 Advanced Basics", fees: "₹15,000" },
};

const AdmissionConfirm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courseMap[id];

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  if (!course) {
    return <p className="text-center mt-20">Invalid Course</p>;
  }

  const submitAdmission = (e) => {
    e.preventDefault();

    // 🔥 Future Backend API
    /*
    fetch("/api/admission/request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        courseId: id,
        fees: course.fees,
        status: "PENDING",
      }),
    });
    */

    navigate("/admission/status");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50
    flex items-center justify-center px-4">

      <form
        onSubmit={submitAdmission}
        className="bg-white p-8 rounded-3xl shadow-2xl
        max-w-md w-full space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-orange-600">
          Admission Form
        </h2>

        <input
          placeholder="Student Name"
          required
          className="w-full p-3 rounded-xl border"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Phone Number"
          required
          className="w-full p-3 rounded-xl border"
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <input
          placeholder="Email"
          required
          className="w-full p-3 rounded-xl border"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        {/* Course Info */}
        <input value={course.name} disabled className="w-full p-3 rounded-xl bg-gray-100" />
        <input value={course.fees} disabled className="w-full p-3 rounded-xl bg-gray-100" />

        <button
          className="w-full py-3 rounded-xl bg-gradient-to-r
          from-yellow-400 to-orange-500 text-white font-bold"
        >
          Confirm Admission
        </button>
      </form>
    </div>
  );
};

export default AdmissionConfirm;
