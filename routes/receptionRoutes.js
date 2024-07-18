const express = require('express');
const { createReservation } = require('../controllers/receptionController');
const { authMiddleware, roleMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/reservation', authMiddleware, roleMiddleware('reception'), createReservation);

module.exports = router;
