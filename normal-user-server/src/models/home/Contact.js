import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    icon: {
      type: String, // Mail, Phone, MapPin
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    value: {
      type: String,
      required: true,
    },

    link: {
      type: String,
      required: true,
    },

    color: {
      type: String,
      required: true,
    },

    bgColor: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    order: {
      type: Number,
      default: 0,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Contact", contactSchema);