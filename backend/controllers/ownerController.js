const User = require('../models/userModel');
const Owner = require('../models/ownerModel');
const Admin = require('../models/adminModel');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const { hashPassword, comparePassword, generateToken, getSecretKey } = require('../utils/utility');




// Admin Registration Controller
exports.register = async (req, res) => {
  console.log(req.body); // Log the request body
  try {
    const { email, password, username } = req.body;
    const hashedPassword = await hashPassword(password);

    // Create a new AdminRequest document
    const ownerSignUp = new Owner({ // Link to the regular user
      username,
      email,
      password: hashedPassword,
    });

    // Save the admin request to the database
    await ownerSignUp.save();


    res.status(201).json({ message: 'Owner Account made successfully' });
  } catch (error) {
    console.error('Admin Request Error:', error);
    res.status(500).json({ message: 'Error in Owner Account Creation' });
  }
};
  

  exports.login = async (req, res) => {
    try {
      console.log(req.body);
      console.log(req.body.ownerEmail)
      const { password, ownerEmail } = req.body;
      console.log("We're trying to log you in...");
      console.log(ownerEmail);
  
      // Check if user exists
      const owner = await Owner.findOne({ email: ownerEmail });
      if (!owner) {
        // User not found
        return res.status(400).json({ error: 'Owner not found', success: false });
      }
    console.log('User Object:', owner);
      // Log stored hashed password for debugging
      console.log('Stored Hashed Password:', owner.password);
      console.log('Entered Password:', password);
  
      // Check if password is correct
      const isPasswordValid = await comparePassword(password, owner.password);
      console.log('Is Password Valid:', isPasswordValid);
  
      if (!isPasswordValid) {
        // Incorrect password
        return res.status(400).json({ error: 'Invalid credentials', success: false });
      }
  
  
  
  
      // Send success response with token
      res.status(200).json({ message: 'Login successful', owner });
    } catch (error) {
      console.error('Error in login:', error);
  
      // Send a detailed error response
      res.status(500).json({ error: error.message || 'Internal server error', success: false });
    }
  };
  

  
// Controller for retrieving all job postings
exports.adminRequests = async (req, res) => {
  try {
    const jobs = await Admin.find({ status: "pending"});
    res.json(jobs);
  } catch (error) {
    res.status(500).send('Error fetching Admin Requests');
  }
};

