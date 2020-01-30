const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const HighScoreSchema = new Schema({
  initials: {
    type: Schema.Types.String,
    required: true
  },
  score: {
    type: Schema.Types.Number,
    required: true
  }
});

module.exports = HighScore = mongoose.model("highScores", HighScoreSchema);
