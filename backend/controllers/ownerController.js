const User = require('../models/userModel');
const Owner = require('../models/ownerModel');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const { hashPassword, comparePassword, generateToken, getSecretKey } = require('../utils/utility');




// Admin Request Controller
exports.register = async (req, res) => {
    console.log(req.body); // Log the request body
    try {
      const { email, password, } = req.body;
      const hashedPassword = await hashPassword(password);
      const owner = new Owner({
        username, 
        email, 
        password : hashedPassword
      });
  
      await owner.save();
  
      res.status(201).json({ message: 'Owner setup successfully' });
    } catch (error) {
      console.error('Owner Setup Successful Request Error:', error); // Log the error for debugging
      res.status(500).json({ message: 'Error in Owner Setup' });
    }
  };
  
  exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log("We're trying to log you in...");
  
      // Check if user exists
      const owner = await Owner.findOne({ email });
      if (!owner) {
        // User not found
        return res.status(400).json({ error: 'Admin not found', success: false });
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
  
  
      const token = generateToken(owner._id);  
  
  
      // Send success response with token
      res.status(200).json({ message: 'Login successful', token, owner });
    } catch (error) {
      console.error('Error in login:', error);
  
      // Send a detailed error response
      res.status(500).json({ error: error.message || 'Internal server error', success: false });
    }
  };
  