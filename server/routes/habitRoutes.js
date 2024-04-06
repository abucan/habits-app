const {
  createHabitAsync,
  getAllHabitsAsync,
  getSingleHabitAsync,
  deleteHabitAsync,
  updateHabitAsync,
} = require('../controllers/habitController');
const { authenticateUser } = require('../middleware/authenticate');

const router = require('express').Router();

router
  .route('/')
  .post(authenticateUser, createHabitAsync)
  .get(authenticateUser, getAllHabitsAsync);

router
  .route('/:id')
  .get(authenticateUser, getSingleHabitAsync)
  .patch(authenticateUser, updateHabitAsync)
  .delete(authenticateUser, deleteHabitAsync);

module.exports = router;
