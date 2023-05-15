const Daily = require("../models/Daily");
exports.createDaily = async (req, res) => {
  try {
    let newDaily = new Daily({
      id: req.body.id,
      pushUps: req.body.pushUps,
      sitUps: req.body.sitUps,
      mile: req.body.mile,
      timestamp: req.body.timestamp,
    });
    await newDaily.save();
    res.send(newDaily);
  } catch (err) {
    console.log(err);
  }
};
exports.readDaily = async (req, res) => {
  const page = req.query.page || 0;
  const limit = req.query.limit || 25;
  try {
    Daily.find({}, (err, result) => {
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
exports.readDailyFromID = async (req, res) => {
  try {
    await Daily.findById({ _id: req.params.id }, {}, (err, result) => {
      if (err) {
        res.json({ app: err });
      }
      res.send(result);
    });
  } catch (err) {
    console.log(err);
  }
};
exports.updateDaily = async (req, res) => {
  try {
    await Daily.findByIdAndUpdate(
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
exports.deleteDaily = async (req, res) => {
  try {
    if ((await Daily.findById(req.params.id)) === null) {
      res.json({ app: "post not found" });
    } else {
      await Daily.findByIdAndRemove(req.params.id).exec();
      res.json({ app: "post deleted" });
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
