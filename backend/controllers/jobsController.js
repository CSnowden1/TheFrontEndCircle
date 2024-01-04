const Job = require('../models/jobModel'); 
const User = require('../models/userModel');
const { getPointsForJobType } = require('../utils/utility');

exports.submitJob = async (req, res) => {
  try {
    const jobDetails = req.body;
    const username = jobDetails.user; // Assuming the field is named 'user'

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const newJob = new Job({ ...jobDetails, user: username });
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
      res.status(500).send('Error fetching pending jobs', error);
    }
  };

  exports.getAllJobs = async (req, res) => {
    try {
      // Fetch all approved jobs
      const jobs = await Job.find({ status: "approved" });
  
      // Extract usernames from the jobs
      const usernames = jobs.map(job => job.user);
  
      // Fetch user data for the extracted usernames
      const users = await User.find({ username: { $in: usernames } });
  
      // Create a map for efficient lookup
      const userMap = {};
      users.forEach(user => {
        userMap[user.username] = user;
      });
  
      // Combine job data with user data
      const jobsWithUserData = jobs.map(job => ({
        ...job.toObject(), // Convert Mongoose document to plain JavaScript object
        user: userMap[job.user], // Replace username with user data
      }));
  
      res.json(jobsWithUserData);
    } catch (error) {
      res.status(500).send('Error fetching jobs', error);
    }
  };

  
  exports.getJobById = async (req, res) => {
    try {
      const jobId = req.params.jobId;
  
      // Fetch the specific job by ID
      const job = await Job.findById(jobId);
  
      if (!job) {
        return res.status(404).json({ error: 'Job not found' });
      }
  
      // Fetch user data for the username associated with the job
      const user = await User.findOne({ username: job.user });
  
      // Combine job data with user data
      const jobWithUserData = {
        ...job.toObject(), // Convert Mongoose document to plain JavaScript object
        user: user || null, // Replace username with user data or null if not found
      };
  
      res.json(jobWithUserData);
    } catch (error) {
      console.error('Error fetching job:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };


exports.jobReview = async (req, res) => {
  try {
    const currentJob = await Job.findById(req.params.jobId);

    if (!currentJob) {
      return res.status(404).json({ error: 'Job not found' });
    }

    const { reviewType, description, clearance, datePosted, addJob } = req.body;

    // Update job score based on review
    const jobScore = getPointsForJobType(reviewType, clearance, datePosted);

    // Update job status based on the provided status value
    if (addJob === 'Yes') {
      currentJob.status = 'approved';
    } else if (addJob === 'No') {
      currentJob.status = 'rejected';
    } else {
      // Handle the case where the provided status is neither 'Yes' nor 'No'
      return res.status(400).json({ error: 'Invalid status value' });
    }

    const username = currentJob.user;  // Assuming the username is stored in the user field
    const user = await User.findOne({ username });  // Find the user by their username

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update user points based on the job score
    user.points += jobScore;

    // Update job score and description
    currentJob.jobScore = jobScore;
    currentJob.description = description;

    // Save changes to both user and job
    await user.save();
    await currentJob.save();

    res.json({ message: 'Job review successfully processed' });
  } catch (error) {
    console.error('Error processing job review:', error);
    res.status(500).json({ error: 'Internal Server Error' });
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
  