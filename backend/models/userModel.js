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
  isOwner: { type: Boolean, default: false },
  isAdmin:  {  type: Boolean, default: false },
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
  bio: {type: String },
  github: {type: String},
  linkedIn: {type: String},
  profileTag: {type: String},
  profilePic:{type: String},
  opentoCollab: {type: Boolean, default: false },
  techStack: {
    type: [String],
  },
  openCollabs: [
    {
      title: String,
      team: [
        {
          username: String,
        }
      ],
      github: String,
      description: String,
      projectId: String,
      projectManager: String,
    },
  ],
  isInUS: { type: String, required: "yes" }
});






module.exports = mongoose.model('User', userSchema);
