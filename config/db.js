// db.js
const mongoose = require('mongoose');
const env = require('dotenv').config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Failed to connect MongoDB', error.message);
  }
};

module.exports = connectDB;
