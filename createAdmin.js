// createAdmin.js
require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');
const connectDB = require('./config/db');

const createAdmin = async () => {
  await connectDB();

  const admin = new User({
    username: 'admin',       // ← Make sure this is "admin"
    password: 'admin123'     // ← And this is "admin123"
  });

  try {
    await admin.save();
    console.log('✅ Admin created successfully');
    process.exit();
  } catch (err) {
    console.error('❌ Error creating admin:', err.message);
    process.exit(1);
  }
};

createAdmin();
