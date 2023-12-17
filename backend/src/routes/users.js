const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const authMiddleware = require('../middleware/authMiddleware');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


router.post('/register', async (req, res) => {
    try {
      const { username, email, password } = req.body;
  
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).send('User already exists');
      }
  
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 12);
  
      // Create a new user
      const user = new User({ username, email, password: hashedPassword });
      await user.save();
  
      res.status(201).send('User registered successfully');
    } catch (error) {
      res.status(500).send('Error in registration');
    }
  });

// User login
router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).send('Invalid credentials');
      }
  
      // Compare password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).send('Invalid credentials');
      }
  
      // Generate token (JWT)
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      res.status(200).json({ token });
    } catch (error) {
      res.status(500).send('Error in login');
    }
  });

// Get user profile
router.get('/profile', authMiddleware, async (req, res) => {
    try {
      // Assuming the user's ID is stored in req.userId from the auth middleware
      const user = await User.findById(req.userId).select('-password');
      if (!user) {
        return res.status(404).send('User not found');
      }
  
      res.json(user);
    } catch (error) {
      res.status(500).send('Error fetching profile');
    }
  });

// Activate access ticket
router.post('/activate-ticket', async (req, res) => {
    try {
      const user = await User.findById(req.user._id); // Assuming req.user is populated from auth middleware
      // Logic to activate a ticket
      res.status(200).send({ message: "Ticket activated" });
    } catch (error) {
      res.status(400).send(error);
    }
  });
  


// Other user-related routes...

module.exports = router;
