const Job = require('../models/jobModel');
const User = require('../models/userModel');




  // Controller for users submitting a job for review
  exports.submitJob = async (req, res) => {
    try {
      const submittedJob = new Job({ ...req.body, status: 'pending' });
      await submittedJob.save();
  
      // Update user's points
      if (req.body.submittedBy) {
        const user = await User.findById(req.body.submittedBy);
        if (user) {
          user.points += getPointsForJobType(submittedJob.type);
          await user.save();
        }
      }
  
      res.status(201).json(submittedJob);
    } catch (error) {
      res.status(400).send('Error submitting job');
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
exports.getAllJobs = async (req, res) => {
    try {
      const jobs = await Job.find({});
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
  