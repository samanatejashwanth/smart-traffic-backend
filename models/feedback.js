const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  location: { type: String, required: true },
  feedbackText: { type: String, required: true },
  rating: { type: Number },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', feedbackSchema);
