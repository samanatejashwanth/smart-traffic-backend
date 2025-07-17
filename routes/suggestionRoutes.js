const express = require('express');
const router = express.Router();
const {
  createSuggestion,
  getAllSuggestions
} = require('../controllers/suggestionController');

router.post('/', createSuggestion);
router.get('/', getAllSuggestions);

module.exports = router;
