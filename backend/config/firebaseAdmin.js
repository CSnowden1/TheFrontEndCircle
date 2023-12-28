const admin = require('firebase-admin');
const serviceAccount = require('../thefrontendcircle-firebase-adminsdk-kmdlx-f3f4da93bd.json'); // Replace with the actual path

// Check if the app is already initialized
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

module.exports = admin;
