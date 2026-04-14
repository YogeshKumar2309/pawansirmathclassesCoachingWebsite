import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    classGroup: {
      type: String, 
      required: true,
      enum: ["6-8", "9-10", "11-12"], // filtering ke liye
    },

    category: {
      type: String, // Class 6, Class 9, Class 12 etc.
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    duration: {
      type: String,
      required: true,
    },

    timing: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Course", courseSchema);