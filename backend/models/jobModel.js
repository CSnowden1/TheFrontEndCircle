const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: ['full-time', 'part-time', 'contract', 'temporary'] // Example job types
  },
  jobLocationType: {
    type: String,
    required: true,
    enum: ['onsite', 'remote', 'hybrid'] // Job location types
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  },
  user: {
    type: String,
    required: true,
  },
  admin: {
    type: String,
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
