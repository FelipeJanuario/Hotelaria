const express = require('express');
const { createUser, deleteUser } = require('../controllers/adminController');
const { authMiddleware, roleMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/user', authMiddleware, roleMiddleware('admin'), createUser);
router.delete('/user/:userId', authMiddleware, roleMiddleware('admin'), deleteUser);

module.exports = router;
