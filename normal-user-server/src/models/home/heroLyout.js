import mongoose from "mongoose";

const homeHeroSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
    ctaText: {
      type: String,
      default: "Get Started",
    },
    ctaLink: {
      type: String,
      default: "/",
    },
  },
  { timestamps: true }
);

export default mongoose.model("HomeHero", homeHeroSchema);