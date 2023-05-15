const express = require("express");
const router = express.Router();
const {
  createDaily,
  readDaily,
  readDailyFromID,
  updateDaily,
  deleteDaily,
} = require("../controllers/Daily");
router.route("/create").post(createDaily);
router.route("/read").get(readDaily);
router.route("/read/:id").get(readDailyFromID);
router.route("/update/:id").post(updateDaily);
router.route("/delete/:id").delete(deleteDaily);
module.exports = router;
