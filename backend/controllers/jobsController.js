const Job = require('../models/jobModel');
const User = require('../models/userModel');

exports.submitJob = async (req, res) => {
  try {
    const jobDetails = req.body;
    const username = jobDetails.user; // Assuming the field is named 'user'

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const newJob = new Job({ ...jobDetails });
    user.jobSubmissions.push(newJob._id); // Push Job ID to User's jobSubmissions array
    await Promise.all([newJob.save(), user.save()]); // Save both the job and user in parallel

    res.status(201).json(newJob);
  } catch (error) {
    console.error('Error submitting job:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};



// Controller for admin creating an approved job posting
exports.createJob = async (req, res) => {
    try {
      const newJob = new Job({ ...req.body, status: 'approved' }); // Directly creating an approved job
      await newJob.save();
  
      res.status(201).json(newJob);
    } catch (error) {
      res.status(400).send('Error creating job');
    }
  };
  



// Controller for retrieving all job postings
exports.getPendingJobs = async (req, res) => {
    try {
      const jobs = await Job.find({ status: "pending"});
      res.json(jobs);
    } catch (error) {
      res.status(500).send('Error fetching jobs');
    }
  };


  exports.getAllJobs = async (req, res) => {
    try {
      const jobs = await Job.find({ status: "accpeted"});
      res.json(jobs);
    } catch (error) {
      res.status(500).send('Error fetching jobs');
    }
  };

  



// Controller for retrieving a specific job posting by ID
exports.getJobById = async (req, res) => {
    try {
      const job = await Job.findById(req.params.jobId);
      if (!job) {
        return res.status(404).send('Job not found');
      }
      res.json(job);
    } catch (error) {
      res.status(500).send('Error fetching job');
    }
  };

  



// Controller for updating a job posting
exports.updateJob = async (req, res) => {
    try {
      const job = await Job.findByIdAndUpdate(req.params.jobId, req.body, { new: true });
      if (!job) {
        return res.status(404).send('Job not found');
      }
      res.json(job);
    } catch (error) {
      res.status(500).send('Error updating job');
    }
  };



  // Controller for deleting a job posting
exports.deleteJob = async (req, res) => {
    try {
      const job = await Job.findByIdAndDelete(req.params.jobId);
      if (!job) {
        return res.status(404).send('Job not found');
      }
      res.send('Job deleted successfully');
    } catch (error) {
      res.status(500).send('Error deleting job');
    }
  };
  