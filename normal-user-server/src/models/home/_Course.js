import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    icon: {
      type: String, // emoji ya icon name store karenge
      required: true,
    },

    color: {
      type: String, // Tailwind gradient class
      required: true,
    },

    features: [
      {
        type: String,
      },
    ],

    students: {
      type: String, // "150+"
      default: "0",
    },

    duration: {
      type: String,
      required: true,
    },

    link: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Course", courseSchema);