const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const { hashPassword, comparePassword, generateToken, getSecretKey } = require('../utils/utility');


// User Registration Controller
exports.register = async (req, res) => {
  console.log(req.body); // Log the request body
  try {
    const { username, email, password, firstName, lastName, city, state, experience, education, isInUS } = req.body;
    if (isInUS !== true) {
      return res.status(400).json({ message: "Registration is only allowed for users in the United States." });
    }

    if (parseInt(experience) > 2) {
      return res.status(400).json({ message: "Only users with less than 2 years of experience are allowed." });
    }

    if (education === "degree") {
      return res.status(400).json({ message: "Registration is only for self-taught developers or bootcamp graduates." });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await hashPassword(password);
    const user = new User({
      username, 
      email, 
      password: hashedPassword, 
      firstName, 
      lastName, 
      city, 
      state, 
      experience, 
      education, 
      isInUS
    });

    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration Error:', error); // Log the error for debugging
    res.status(500).json({ message: 'Error in registration' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("We're trying to log you in...");

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      // User not found
      return res.status(400).json({ error: 'User not found', success: false });
    }
  console.log('User Object:', user);
    // Log stored hashed password for debugging
    console.log('Stored Hashed Password:', user.password);
    console.log('Entered Password:', password);

    // Check if password is correct
    const isPasswordValid = await comparePassword(password, user.password);
    console.log('Is Password Valid:', isPasswordValid);

    if (!isPasswordValid) {
      // Incorrect password
      return res.status(400).json({ error: 'Invalid credentials', success: false });
    }


    const token = generateToken(user._id);  


    // Send success response with token
    res.status(200).json({ message: 'Login successful', token, success: true });
  } catch (error) {
    console.error('Error in login:', error);

    // Send a detailed error response
    res.status(500).json({ error: error.message || 'Internal server error', success: false });
  }
};


// Get User Profile Controller
exports.getProfile = async (req, res) => {
  try {
    // Retrieve the user's profile, excluding the password
    const user = await User.findById(req.user._id).select('-password');
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.json(user);
  } catch (error) {
    res.status(500).send('Error fetching profile');
  }
};

// Activate Access Ticket Controller
exports.activateTicket = async (req, res) => {
  try {
    // Logic to find the user and activate a ticket
    // Placeholder: Update this logic based on your application's requirements
    const user = await User.findById(req.user._id); 
    // ... ticket activation logic
    res.status(200).send({ message: "Ticket activated" });
  } catch (error) {
    res.status(400).send(error);
  }
};



exports.getUserData = async (req, res) => {
  try {
    const { firebaseUid } = req.body; // Assuming the UID is sent in the request body

    // Find the user by Firebase UID
    const user = await User.findOne({ firebaseUid }).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Send back the user data
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user data' });
  }
};