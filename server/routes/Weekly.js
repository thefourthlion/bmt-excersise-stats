const express = require("express");
const router = express.Router();
const {
  createWeekly,
  readWeekly,
  readWeeklyFromID,
  updateWeekly,
  deleteWeekly,
} = require("../controllers/Weekly");
router.route("/create").post(createWeekly);
router.route("/read").get(readWeekly);
router.route("/read/:id").get(readWeeklyFromID);
router.route("/update/:id").post(updateWeekly);
router.route("/delete/:id").delete(deleteWeekly);
module.exports = router;
