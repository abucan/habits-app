const { StatusCodes } = require('http-status-codes');
const Habit = require('../models/Habits');
const CustomAPIError = require('../errors');

const getAllHabitsAsync = async (req, res) => {
  const { user } = req;
  const habits = await Habit.find({ user: user.userId });
  res.status(StatusCodes.OK).json({ habits, count: habits.length });
};

const getSingleHabitAsync = async (req, res) => {
  const { user } = req;
  const { id: habitId } = req.params;
  const habit = await Habit.findOne({
    _id: habitId,
    user: user.userId,
  });
  if (!habit) {
    throw new CustomAPIError.NotFoundError(
      `No habit with id : ${habitId}`,
    );
  }
  res.status(StatusCodes.OK).json({ habit });
};

const createHabitAsync = async (req, res) => {
  const { user } = req;
  const habit = await Habit.create({
    ...req.body,
    user: user.userId,
  });
  res.status(StatusCodes.CREATED).json({ habit });
};

const deleteHabitAsync = async (req, res) => {
  const { user } = req;
  const { id: habitId } = req.params;
  const habit = await Habit.findOneAndDelete({
    _id: habitId,
    user: user.userId,
  });

  if (!habit) {
    throw new CustomAPIError.NotFoundError(
      `No habit with id : ${habitId}`,
    );
  }
  res.status(StatusCodes.OK).json({ msg: 'Deleted!' });
};

const updateHabitAsync = async (req, res) => {
  const { user } = req;
  const { id: habitId } = req.params;
  const {
    habitName,
    habitDescription,
    habitIcon,
    habitColor,
    habitStartDate,
    habitEndDate,
    habitFrequency,
    habitDays,
    habitStatus,
    habitGoal,
    habitGoalUnit,
  } = req.body;

  const habit = await Habit.findOneAndUpdate(
    {
      _id: habitId,
      user: user.userId,
    },
    {
      habitName,
      habitDescription,
      habitIcon,
      habitColor,
      habitStartDate,
      habitEndDate,
      habitFrequency,
      habitDays,
      habitStatus,
      habitGoal,
      habitGoalUnit,
    },
    {
      new: true,
      runValidators: true,
    },
  );

  if (!habit) {
    throw new CustomAPIError.NotFoundError(
      `No habit with id : ${habitId}`,
    );
  }
  res.status(StatusCodes.OK).json({ habit });
};

module.exports = {
  createHabitAsync,
  getAllHabitsAsync,
  getSingleHabitAsync,
  deleteHabitAsync,
  updateHabitAsync,
};
