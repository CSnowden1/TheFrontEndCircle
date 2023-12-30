const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const accessTicketSchema = new mongoose.Schema({
  validUntil: Date,
  isActivated: {
    type: Boolean,
    default: false
  }
});

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  points: { type: Number, default: 0 },
  accessTickets: [accessTicketSchema],
  jobSubmissions: [
    {
      title: String,
      description: String,
      company: String,
      location: String,
      type: String,
      jobLocationType: String,
      link: String,
      status: { type: String, default: 'pending' }, 
    },
  ],
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  experience: { type: Number, required: true },
  education: { type: String, required: true, enum: ['degree', 'bootcamp', 'self-taught'] },
  isInUS: { type: String, required: "yes" }
});






module.exports = mongoose.model('User', userSchema);
