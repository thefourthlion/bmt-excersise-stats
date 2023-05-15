const mongoose = require("mongoose");
const WeeklySchema = new mongoose.Schema(
  {
    id: { type: String, required: [true, "Please provide id"] },
    pushUps: { type: String, required: [true, "Please provide pushUps"] },
    sitUps: { type: String, required: [true, "Please provide sitUps"] },
    mile: { type: String, required: [true, "Please provide mile"] },
    timestamp: { type: String, required: [true, "Please provide timestamp"] },
  },
  { timestamps: true }
);
const Weekly = mongoose.model("Weekly", WeeklySchema);
module.exports = Weekly;
