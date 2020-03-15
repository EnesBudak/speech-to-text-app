const mongoose = require("mongoose");

const transcribeSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: 1
  },
  transcribe: {
    type: String,
    required: true
  },
  wordInfos: {
    type: Array,
    required: true
  },
  data: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Transcribe", transcribeSchema);
