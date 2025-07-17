const mongoose = require('mongoose');

const suggestionSchema = new mongoose.Schema({
  location: { type: String, required: true },
  congestionLevel: { type: String, required: true },
  smartRoute: {
    message: String,
    suggestedRoute: String,
    priority: String
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Suggestion', suggestionSchema);
