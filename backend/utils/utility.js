const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



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

exports.generateToken = (userId) => {
  const expiresIn = process.env.NODE_ENV === 'development' ? '12h' : '1h';
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn });
};
