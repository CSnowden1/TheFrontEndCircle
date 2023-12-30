const express = require('express');
const router = express.Router();
const jobsController = require('../../controllers/jobsController');
const authMiddleware = require('../../middleware/authMiddleware');

// Route for users to submit a job for review
router.post('/submit', jobsController.submitJob);

// Route for admin to create a job directly
router.post('/create', authMiddleware, jobsController.createJob); // Ensure this is admin-protected

// Route to get all jobs
router.get('/', authMiddleware, jobsController.getAllJobs);

// Route to get a specific job by ID
router.get('/:jobId', authMiddleware, jobsController.getJobById);

// Route to update a specific job (typically admin-protected)
router.put('/:jobId', authMiddleware, jobsController.updateJob);

// Route to delete a specific job (typically admin-protected)
router.delete('/:jobId', authMiddleware, jobsController.deleteJob);

module.exports = router;
