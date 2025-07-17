const Feedback = require('../models/feedback');

// POST /api/feedback
const submitFeedback = async (req, res) => {
  try {
    const { location, feedbackText, rating } = req.body;

    const feedback = new Feedback({ location, feedbackText, rating });
    const saved = await feedback.save();

    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET /api/feedback
const getAllFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ timestamp: -1 });
    res.status(200).json(feedbacks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { submitFeedback, getAllFeedback };
