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


exports.getPointsForJobType = (type) => {
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




exports.hashPassword = async (password) => {
  return await bcrypt.hash(password, 12);
};

exports.comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

