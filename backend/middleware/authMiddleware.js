const admin = require('firebase-admin');

// Initialize Firebase Admin SDK (ensure you have the appropriate credentials)
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

// Middleware to verify Firebase Authentication token
const authMiddleware = async (req, res, next) => {
  const idToken = req.headers.authorization;

  try {
    if (!idToken) {
      throw new Error('No token provided');
    }

    // Verify the Firebase Authentication token
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    
    // Attach user information to the request for further processing in route handlers
    req.user = {
      uid: decodedToken.uid,
      email: decodedToken.email,
      // Add other relevant user information if needed
    };

    // Continue to the next middleware or route handler
    next();
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized', message: error.message });
  }
};
  
module.exports = authMiddleware;
  
  