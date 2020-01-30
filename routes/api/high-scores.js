const express = require("express");
const router = express.Router();

// Load Game model
const HighScores = require("../../models/HighScores");

router.post("/", (req, res) => {
  console.log(req.body);
  HighScores.create(req.body).then(highscore => {
    res.json(highscore);
  });
});

router.get("/", (req, res) => {
  HighScores.find({}).then(highScores => {
    res.json({ highScores });
  });
});

module.exports = router;
