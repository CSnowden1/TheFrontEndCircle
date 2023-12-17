const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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
  jobSubmissions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Job' }],
  // Additional fields as needed
});

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

module.exports = mongoose.model('User', userSchema);
