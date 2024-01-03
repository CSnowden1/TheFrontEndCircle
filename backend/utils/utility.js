const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

exports.getSecretKey = () => {
  return process.env.JWT_SECRET || crypto.randomBytes(32).toString('hex');
};


exports.generateToken = (userId) => {
  const expiresIn = process.env.NODE_ENV === 'development' ? '12h' : '1h';
  const secretKey = exports.getSecretKey();
  return jwt.sign({ userId }, secretKey, { expiresIn });
};

exports.getPointsForJobType = (type, clearance, datePosted) => {
  let jobScore = 0;

  switch (type.toLowerCase()) {
    case 'remote':
      jobScore = 1;
      break;
    case 'hybrid':
      jobScore = 0.5;
      break;
    case 'onsite':
      jobScore = 0.25;
      break;
    default:
      break;
  }

  if (clearance === 'yes') {
    jobScore = jobScore / 4;
  }

  switch (datePosted) {
    case 'new':
      jobScore = jobScore * 1;
      break;
    case 'old':
      jobScore = jobScore / 2;
      break;
    case 'dead':
      jobScore = jobScore / 5;
      break;
    default:
      break;
  }

  return jobScore;
};



exports.hashPassword = async (password) => {
  return await bcrypt.hash(password, 12);
};

exports.comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

