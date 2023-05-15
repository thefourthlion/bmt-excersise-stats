const Weekly = require("../models/Weekly");
exports.createWeekly = async (req, res) => {
  try {
    let newWeekly = new Weekly({
      id: req.body.id,
      pushUps: req.body.pushUps,
      sitUps: req.body.sitUps,
      mile: req.body.mile,
      timestamp: req.body.timestamp,
    });
    await newWeekly.save();
    res.send(newWeekly);
  } catch (err) {
    console.log(err);
  }
};
exports.readWeekly = async (req, res) => {
  const page = req.query.page || 0;
  const limit = req.query.limit || 25;
  try {
    Weekly.find({}, (err, result) => {
      if (err) {
        res.json({ app: err });
      }
      res.send(result);
    })
      .sort()
      .skip(page * limit)
      .limit(limit);
  } catch (err) {
    console.log(err);
  }
};
exports.readWeeklyFromID = async (req, res) => {
  try {
    await Weekly.findById({ _id: req.params.id }, {}, (err, result) => {
      if (err) {
        res.json({ app: err });
      }
      res.send(result);
    });
  } catch (err) {
    console.log(err);
  }
};
exports.updateWeekly = async (req, res) => {
  try {
    await Weekly.findByIdAndUpdate(
      req.params.id,
      {
        id: req.body.id,
        pushUps: req.body.pushUps,
        sitUps: req.body.sitUps,
        mile: req.body.mile,
        timestamp: req.body.timestamp,
      },
      (err, result) => {
        if (err) {
          res.json({ app: err });
        }
        res.send(result);
      }
    );
  } catch (err) {
    console.log(err);
  }
};
exports.deleteWeekly = async (req, res) => {
  try {
    if ((await Weekly.findById(req.params.id)) === null) {
      res.json({ app: "post not found" });
    } else {
      await Weekly.findByIdAndRemove(req.params.id).exec();
      res.json({ app: "post deleted" });
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
