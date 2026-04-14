import mongoose from "mongoose";

const batchSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  days: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  instructor: {
    type: String,
    required: true,
  },
  seats: {
    type: String,
    required: true,
  },
});

const scheduleSchema = new mongoose.Schema(
  {
    className: {
      type: String,
      required: true,
      enum: ["Class 6 – 8", "Class 9 – 10", "Class 11 – 12"],
    },

    color: {
      type: String,
      default: function () {
        if (this.className === "Class 6 – 8")
          return "from-orange-400 to-pink-500";
        if (this.className === "Class 9 – 10")
          return "from-purple-500 to-indigo-600";
        if (this.className === "Class 11 – 12")
          return "from-yellow-400 to-orange-500";
      },
    },

    batches: [batchSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Schedule", scheduleSchema);