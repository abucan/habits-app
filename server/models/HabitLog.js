const mongoose = require('mongoose');

const HabitLogSchema = new mongoose.Schema({
  habitId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Habit',
    required: true,
  },
  progressHistory: [
    {
      date: {
        type: Date,
        required: true,
      },
      isCompleted: {
        type: Boolean,
        required: true,
      },
    },
  ],
  habitStreak: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model('HabitLog', HabitLogSchema);
