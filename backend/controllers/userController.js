const User = require('../models/userModel');
const { hashPassword, comparePassword, generateToken } = require('../utils/utility');


// User Registration Controller
exports.register = async (req, res) => {
  try {
    const { username, email, password, state, experience, education, isInUS } = req.body;

    if (isInUS !== 'yes') {
      return res.status(400).json({ message: "Registration is only allowed for users in the United States." });
    }

    if (parseInt(experience) > 2) {
      return res.status(400).json({ message: "Only users with less than 2 years of experience are allowed." });
    }

    if (education === "degree") {
      return res.status(400).json({ message: "Registration is only for self-taught developers or bootcamp graduates." });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await hashPassword(password);

    const user = new User({ username, email, password: hashedPassword, state, experience, education });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error in registration' });
  }
};


// User Login Controller
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user || !(await comparePassword(password, user.password))) {
      return res.status(400).send('Invalid credentials');
    }

    // Generate a JWT token
    const token = generateToken(user._id);
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).send('Error in login');
  }
};

// Get User Profile Controller
exports.getProfile = async (req, res) => {
  try {
    // Retrieve the user's profile, excluding the password
    const user = await User.findById(req.user._id).select('-password');
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.json(user);
  } catch (error) {
    res.status(500).send('Error fetching profile');
  }
};

// Activate Access Ticket Controller
exports.activateTicket = async (req, res) => {
  try {
    // Logic to find the user and activate a ticket
    // Placeholder: Update this logic based on your application's requirements
    const user = await User.findById(req.user._id); 
    // ... ticket activation logic
    res.status(200).send({ message: "Ticket activated" });
  } catch (error) {
    res.status(400).send(error);
  }
};



exports.getUserData = async (req, res) => {
  try {
    const { firebaseUid } = req.body; // Assuming the UID is sent in the request body

    // Find the user by Firebase UID
    const user = await User.findOne({ firebaseUid }).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Send back the user data
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user data' });
  }
};