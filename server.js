const express = require('express');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const { generateToken } = require('./auth');
const { authenticate } = require('./middleware');
const User = require('./user');

app.use(express.json());

const mongoURI = 'mongodb+srv://SRI:6i6r8nitd3@user.eztjc1u.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Serve static files from the "IARE" folder
app.use(express.static(path.join(__dirname, 'IARE')));

// Serve static files from the "playplex" folder
app.use(express.static(path.join(__dirname, 'playplex')));

// Signup route
app.post('/signup', async (req, res) => {
  // Your signup route logic
});

// Login route
app.post('/login', async (req, res) => {
  // Your login route logic
});

// Your other routes and configurations go here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
