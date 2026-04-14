import mongoose from "mongoose";

const featureSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    desc: {
      type: String,
      required: true,
    },

    icon: {
      type: String, // emoji store karenge
      required: true,
    },

    lucideIcon: {
      type: String, // icon ka naam store karenge (UserCheck, Sparkles, etc.)
      required: true,
    },

    color: {
      type: String, // Tailwind gradient class
      required: true,
    },

    benefits: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Feature", featureSchema);