const mongoose = require("mongoose");
const DailySchema = new mongoose.Schema(
  {
    id: { type: String, required: [true, "Please provide id"] },
    pushUps: { type: String, required: [true, "Please provide pushUps"] },
    sitUps: { type: String, required: [true, "Please provide sitUps"] },
    mile: { type: String, required: [true, "Please provide mile"] },
    timestamp: { type: String, required: [true, "Please provide timestamp"] },
  },
  { timestamps: true }
);
const Daily = mongoose.model("Daily", DailySchema);
module.exports = Daily;
