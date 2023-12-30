//username
//password
//email
//Points given out
//Reviewed Jobs
//Jobs Added
//Jobs Deleted
//Job Edited
//Accounts Blocked
//Accounts Suspended
//Admin Id

const mongoose = require('mongoose');
const User = require('./userModel');

const adminSchema = new mongoose.Schema({
  // Common fields for all users (inherited from User)
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: true,
  },
  // Admin-specific fields
  pointsGivenOut: {
    type: Number,
    default: 0,
  },
  reviewedJobs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Job',
    },
  ],
  jobsAdded: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Job',
    },
  ],
  jobsDeleted: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Job',
    },
  ],
  jobsEdited: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Job',
    },
  ],
  accountsBlocked: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  accountsSuspended: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  adminId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin',
  },
  // ... other admin-specific fields
});

// Creating the Admin model by extending the User model
const Admin = User.discriminator('Admin', adminSchema);

module.exports = Admin;
