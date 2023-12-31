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
      note: {
        type: String,
        required: true,
      },
    },
  ],
  jobsAdded: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Job',
      note: {
        type: String,
        required: true,
      },
    },
  ],
  jobsDeleted: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Job',
      note: {
        type: String,
        required: true,
      },
    },
  ],
  jobsEdited: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Job',
      note: {
        type: String,
        required: true,
      },
    },
  ],
  accountsBlocked: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      note: {
        type: String,
        required: true,
      },
    },
  ],
  accountsSuspended: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      note: {
        type: String,
        required: true,
      },
    },
  ],
  adminId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin',
  },
  // ... other admin-specific fields
});

// Creating the Admin model by extending the User model
module.exports = mongoose.model('Admin', adminSchema);
