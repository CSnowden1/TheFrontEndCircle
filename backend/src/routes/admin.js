const express = require('express');
const router = express.Router();
const authMiddleware = require('../../middleware/authMiddleware');
const adminController = require('../../controllers/adminController');

router.post('/register', adminController.register);
router.post('/login', authMiddleware, adminController.login);

module.exports = router;
