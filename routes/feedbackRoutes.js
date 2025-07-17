const express = require('express');
const router = express.Router();
const { submitFeedback, getAllFeedback } = require('../controllers/feedbackController');

// POST /api/feedback
router.post('/', submitFeedback);

// GET /api/feedback
router.get('/', getAllFeedback);

module.exports = router;
