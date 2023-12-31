const express = require('express');
const router = express.Router();
const authMiddleware = require('../../middleware/authMiddleware');
const ownerController = require('../../controllers/ownerController');

router.post('/register', ownerController.register);
router.post('/login', ownerController.login);
router.get('/requests', ownerController.adminRequests);

module.exports = router;
