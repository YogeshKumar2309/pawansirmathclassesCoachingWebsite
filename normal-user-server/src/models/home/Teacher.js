import mongoose from "mongoose";

const detailSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

const achievementSchema = new mongoose.Schema({
  icon: {
    type: String, // Award, Star, etc.
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});

const teacherSchema = new mongoose.Schema(
  {
    // 🔹 Basic Info
    name: {
      type: String,
      required: true,
      trim: true,
    },

    subject: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    experience: {
      type: String,
      required: true,
    },

    specialization: {
      type: String,
    },

    location: {
      type: String,
    },

    phone: {
      type: String,
    },

    email: {
      type: String,
    },

    image: {
      type: String,
      required: true,
    },

    quote: {
      type: String,
    },

    // 🔹 Detailed Sections
    details: [detailSchema],

    experiences: [String],

    qualification: {
      type: String,
    },

    bio: {
      type: String,
    },

    subjects: [String],

    achievements: [achievementSchema],

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Teacher", teacherSchema);