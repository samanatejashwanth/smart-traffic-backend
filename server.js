const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path'); // For serving static files
const connectDB = require('./config/db');

// Route imports
const suggestionRoutes = require('./routes/suggestionRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./middleware/errorMiddleware');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.use('/api/suggestions', suggestionRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/admin', authRoutes);

// Custom error handler
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
