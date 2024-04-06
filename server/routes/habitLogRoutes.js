const router = require('express').Router();
const {
  updateHabitProgress,
} = require('../controllers/habitLogController');
const { authenticateUser } = require('../middleware/authenticate');

router.route('/:id').put(authenticateUser, updateHabitProgress);

module.exports = router;
