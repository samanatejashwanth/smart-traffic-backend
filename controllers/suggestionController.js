const Suggestion = require('../models/Suggestion');
const { generateSmartRoute } = require('../utils/trafficAI');

// POST /api/suggestions
const createSuggestion = async (req, res) => {
  try {
    const { location, congestionLevel } = req.body;

    const smartRoute = generateSmartRoute(location, congestionLevel);

    const suggestion = new Suggestion({
      location,
      congestionLevel,
      smartRoute,
    });

    const saved = await suggestion.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET /api/suggestions
const getAllSuggestions = async (req, res) => {
  try {
    const suggestions = await Suggestion.find().sort({ createdAt: -1 });
    res.status(200).json(suggestions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createSuggestion, getAllSuggestions };
