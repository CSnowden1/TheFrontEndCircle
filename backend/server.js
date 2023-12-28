const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/dbConfig'); // Separate file for DB connection
const errorMiddleware = require('./middleware/errorHandleingMiddleware');
const usersRouter = require('./src/routes/users'); 
const jobsRouter = require('./src/routes/jobs');
const firebaseAdmin = require('./config/firebaseAdmin'); 

const app = express(); // Define the app variable by calling express()

// Middleware to parse JSON bodies
app.use(express.json()); // You only need this line once

// Database Connection
connectDB();

// CORS Middleware
app.use(cors());

// Routes
app.use('/api/users', usersRouter);
app.use('/api/jobs', jobsRouter);

// Error Handling Middleware
app.use(errorMiddleware);

// Starting the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
