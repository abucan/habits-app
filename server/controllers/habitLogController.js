const CustomAPIError = require('../errors');
const HabitLog = require('../models/HabitLog');
const Habit = require('../models/Habits');
const { StatusCodes } = require('http-status-codes');

const updateHabitProgress = async (req, res) => {
  const { user } = req;
  const { id: habitId } = req.params;
  const { isCompleted, date } = req.body;

  const habitExists = await Habit.findOne({
    _id: habitId,
    user: user.userId,
  });

  if (!habitExists)
    throw new CustomAPIError.NotFoundError('No habit found');

  let habitLog = await HabitLog.findOne({
    habitId,
  });

  dateAlreadyExists = habitLog.progressHistory.some(
    (progress) =>
      progress.date.toISOString().split('T')[0] ===
      date.split('T')[0],
  );

  if (dateAlreadyExists) {
    habitLog.progressHistory = habitLog.progressHistory.map(
      (progress) => {
        if (
          progress.date.toISOString().split('T')[0] ===
          date.split('T')[0]
        ) {
          progress.isCompleted = isCompleted;
        }
        return progress;
      },
    );
  } else {
    habitLog.progressHistory.push({
      date,
      isCompleted,
    });
  }

  await updateHabitStreak(habitLog);

  res.status(StatusCodes.OK).json({ habitLog });
};

const updateHabitStreak = async (habitLog) => {
  const { progressHistory } = habitLog;
  let currentStreak = 0;
  let longestStreak = 0;
  let previousDate;

  for (const progress of progressHistory) {
    const currentDate = new Date(progress.date);

    // Check if progress entry is completed for the current day
    if (progress.isCompleted) {
      // Skip the first iteration as there's no previous date yet
      if (!previousDate) {
        previousDate = currentDate;
        currentStreak++;
        longestStreak = currentStreak;
        continue;
      }

      const timeDifference = currentDate - previousDate;
      const daysDifference = timeDifference / (1000 * 3600 * 24);

      // If progress is consecutive, increment streaks
      if (daysDifference === 1) {
        currentStreak++;
        longestStreak = Math.max(longestStreak, currentStreak);
      } else {
        // Reset current streak if progress is not consecutive
        currentStreak = 1;
      }

      previousDate = currentDate;
    } else {
      // Reset current streak if progress is not completed
      currentStreak = 0;
      previousDate = null;
    }
  }

  habitLog.habitStreak = currentStreak;
  console.log('longest streak', longestStreak);
  await habitLog.save();
};

module.exports = {
  updateHabitProgress,
  updateHabitStreak,
};
