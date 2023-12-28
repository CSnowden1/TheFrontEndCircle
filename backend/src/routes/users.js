const express = require('express');
const router = express.Router();
const authMiddleware = require('../../middleware/authMiddleware');
const usersController = require('../../controllers/userController');

router.post('/register', usersController.register);
router.post('/login', authMiddleware, usersController.login);
router.get('/profile', authMiddleware, usersController.getProfile);
router.post('/activate-ticket', authMiddleware, usersController.activateTicket);
router.get('/getuserdata', usersController.getUserData);


module.exports = router;
