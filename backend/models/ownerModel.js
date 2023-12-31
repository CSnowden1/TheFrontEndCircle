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
      note: {
        type: String,
        required: true,
      },
    },
  ],
  removedAdmins: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Admin',
      note: {
        type: String,
        required: true,
      },
    },
  ],
  addedAdmins: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Admin',
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
});


module.exports = mongoose.model('Owner', ownerSchema);
