const { initializeApp } = require('firebase-admin/app'); // Import initializeApp from 'firebase-admin/app'
const { getAuth } = require('firebase-admin/auth'); // Import getAuth from 'firebase-admin/auth'
const { applicationDefault } = require('firebase-admin/app');
const serviceAccount = require('../thefrontendcircle-firebase-adminsdk-kmdlx-f3f4da93bd.json');

initializeApp({
  credential: applicationDefault(),
});
// Middleware to verify Firebase Authentication token
const authMiddleware = async (req, res, next) => {

  const idToken = req.headers.authorization.split(' ')[1];
  try {
    if (!idToken) {
      throw new Error('No token provided');
    }

    // Verify the Firebase Authentication token using Firebase Admin SDK
    const decodedToken = await getAuth().verifyIdToken(idToken);

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
