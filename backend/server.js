const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const errorMiddleware = require('./middleware/errorMiddleware');
const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON bodies

// Database Connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Could not connect to MongoDB", err));

// Routes
const usersRouter = require('./routes/users');
const jobsRouter = require('./routes/jobs');
// Add more route imports as needed

app.use('/api/users', usersRouter);
app.use('/api/jobs', jobsRouter);
// Add more routes as needed

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Hello from the backend server!');
});

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.use(errorMiddleware);

// Starting the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
