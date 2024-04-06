const CustomAPIError = require('../errors');
const HabitLog = require('../models/HabitLog');
const Habit = require('../models/Habits');
const { StatusCodes } = require('http-status-codes');

const updateHabitProgress = async (req, res) => {
  const { user } = req;
  const { id: habitId } = req.params;
  const { isCompleted, date } = req.body;

  // check the case if habit in Habit Model does not exist
  const habitExists = await Habit.findOne({
    _id: habitId,
    user: user.userId,
  });

  if (!habitExists)
    throw new CustomAPIError.NotFoundError('No habit found');

  let habitLog = await HabitLog.findOne({
    habitId,
  });

  if (!habitLog) {
    habitLog = await HabitLog.create({
      habitId,
      progressHistory: [
        {
          isCompleted,
          date,
        },
      ],
      habitStreak: isCompleted === 'completed' ? 1 : 0,
    });
  } else {
    // check here
    const dateAlreadyExists = habitLog.progressHistory.some(
      (progress) =>
        progress.date.toDateString() ===
        new Date(date).toDateString(),
    );
    console.log(dateAlreadyExists);
    if (dateAlreadyExists) {
      console.log('changing only the isCompleted value');
      const habitProgress = habitLog.progressHistory.find(
        (progress) =>
          progress.date.toDateString() ===
          new Date(date).toDateString(),
      );
      if (
        habitProgress.isCompleted === 'completed' &&
        isCompleted === 'completed'
      ) {
        habitLog.habitStreak =
          habitLog.progressHistory
            .map((progress) => progress.isCompleted)
            .lastIndexOf('completed') + 1;
      } else {
        habitLog.habitStreak = 0;
      }
      habitProgress.isCompleted = isCompleted;
    } else {
      console.log('pushing new progress');
      habitLog.progressHistory.push({ isCompleted, date });
      if (isCompleted === 'completed') {
        habitLog.habitStreak += 1;
      } else {
        habitLog.habitStreak = 0;
      }
    }

    await habitLog.save();
  }
  res.status(StatusCodes.OK).json({ habitLog });
};

module.exports = {
  updateHabitProgress,
};
