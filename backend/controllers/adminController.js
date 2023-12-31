const User = require('../models/userModel');
const Admin = require('../models/adminModel');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const { hashPassword, comparePassword, generateToken, getSecretKey } = require('../utils/utility');


// Admin Registration Controller
exports.register = async (req, res) => {
  console.log(req.body); // Log the request body
  try {
    const { email, password, linkedIn, github, reason, username } = req.body;
    const hashedPassword = await hashPassword(password);

    // Assuming you have a User model, find the regular user by some identifier (e.g., email)
    const regularUser = await User.findOne({ email: email });

    if (!regularUser) {
      return res.status(404).json({ message: 'Regular user not found' });
    }

    // Check if the user is already an admin
    if (regularUser.isAdmin) {
      return res.status(400).json({ message: 'User is already an admin' });
    }

    // Check if the user already has a pending admin request
    if (regularUser.adminStatus === 'pending') {
      return res.status(400).json({ message: 'Admin request is already pending' });
    }

    // Create a new AdminRequest document
    const adminRequest = new Admin({
      userId: regularUser._id, // Link to the regular user
      linkedIn,
      github,
      reason,
      username,
      email,
      password: hashedPassword,
      status: 'pending', // Initial status
    });

    // Save the admin request to the database
    await adminRequest.save();

    // Update the existing user to mark them as having a pending admin request
    regularUser.adminStatus = 'pending';
    await regularUser.save();

    res.status(201).json({ message: 'Admin request sent successfully' });
  } catch (error) {
    console.error('Admin Request Error:', error);
    res.status(500).json({ message: 'Error in Admin Request' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("We're trying to send your request you in...");

    // Check if user exists
    const admin = await Admin.findOne({ email });
    if (!admin) {
      // User not found
      return res.status(400).json({ error: 'Admin not found', success: false });
    }
  console.log('User Object:', admin);
    // Log stored hashed password for debugging
    console.log('Stored Hashed Password:', admin.password);
    console.log('Entered Password:', password);

    // Check if password is correct
    const isPasswordValid = await comparePassword(password, admin.password);
    console.log('Is Password Valid:', isPasswordValid);

    if (!isPasswordValid) {
      // Incorrect password
      return res.status(400).json({ error: 'Invalid credentials', success: false });
    }


    const token = generateToken(admin._id);  


    // Send success response with token
    res.status(200).json({ message: 'Login successful', token, user });
  } catch (error) {
    console.error('Error in login:', error);

    // Send a detailed error response
    res.status(500).json({ error: error.message || 'Internal server error', success: false });
  }
};
