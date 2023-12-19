const jwt = require('jsonwebtoken');

  const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
  
    if (!token) {
      return res.status(401).send({ message: 'No token provided, authorization denied' });
    }
  
    try {
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded.user; // Set the user in the request
      next();
    } catch (err) {
      res.status(401).send({ message: 'Token is not valid' });
    }
  };
  
  module.exports = authMiddleware;
  
  