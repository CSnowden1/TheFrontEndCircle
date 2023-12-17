const express = require('express');
const router = express.Router();
const { Job } = require('../models/jobModel');
const { User } = require('../models/userModel');
const authMiddleware = require('../middleware/authMiddleware');


router.post('/submit', async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();

    const user = await User.findById(job.submittedBy);
    user.points += getPointsForJobType(job.type); // Implement this function
    if (user.points >= 5) {
        const ticket = {
            validUntil: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours from now
            isActivated: false
          };
    
          user.accessTickets.push(ticket);    

          user.points -= 5;
    }
    await user.save();

    res.status(201).send(job);
  } catch (error) {
    res.status(400).send(error);
  }
});


router.get('/', authMiddleware, async (req, res) => {
    try {
      const jobs = await Job.find({}); // Add any filters or sorting as needed
      res.status(200).json(jobs);
    } catch (error) {
      res.status(500).send('Error fetching jobs');
    }
  });



  function getPointsForJobType(type) {
    switch (type) {
      case 'type1':
        return 0.33;
      case 'type2':
        return 0.25;
      case 'type3':
        return 1;
      default:
        return 0; // Default case if the type is unknown
    }
  }

module.exports = router;
