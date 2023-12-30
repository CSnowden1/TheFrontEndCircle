//username
//password
//email
//Points given out
//Reviewed Jobs
// Points Removed
//Job request
//Admin Requests
//Removed Admins
//Added Admins
//Jobs Added
//Jobs Deleted
//Job Edited
//Accounts Blocked
//Accounts Suspended
//Admin Id




const mongoose = require('mongoose');
const User = require('./userModel');

const ownerSchema = new mongoose.Schema({
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
  // Owner-specific fields
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
  pointsRemoved: {
    type: Number,
    default: 0,
  },
  jobRequests: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Job',
    },
  ],
  adminRequests: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Admin',
    },
  ],
  removedAdmins: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Admin',
    },
  ],
  addedAdmins: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Admin',
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
  // ... other owner-specific fields
});

// Creating the Owner model by extending the User model
const Owner = User.discriminator('Owner', ownerSchema);

module.exports = Owner;
