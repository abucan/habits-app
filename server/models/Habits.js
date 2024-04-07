const mongoose = require('mongoose');

const HabitSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  habitName: {
    type: String,
    required: [true, 'Please provide a habit name'],
    minlength: 3,
    maxlength: 50,
  },
  habitDescription: {
    type: String,
    required: [true, 'Please provide a habit description'],
    minlength: 3,
    maxlength: 100,
  },
  habitIcon: {
    type: String,
    default: 'default',
  },
  habitColor: {
    type: String,
    enum: ['blue', 'green', 'red', 'yellow', 'purple', 'orange'],
    default: 'blue',
  },
  habitStartDate: {
    type: Date,
    default: Date.now,
  },
  habitEndDate: {
    type: Date,
    required: [true, 'Please provide a habit end date'],
  },
  habitFrequency: {
    type: String,
    enum: ['daily', 'weekly', 'monthly'],
    default: 'daily',
  },
  habitDays: {
    type: [String],
    enum: [
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
      'sunday',
    ],
    default: [
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
      'sunday',
    ],
  },
  habitStatus: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
  },
  habitGoal: {
    type: Number,
    required: [true, 'Please provide a habit goal'],
  },
  habitGoalUnit: {
    type: String,
    required: [true, 'Please provide a habit goal unit'],
  },
});

HabitSchema.post('save', async function (doc, next) {
  const existingHabitLog = await mongoose.models.HabitLog.findOne({
    habitId: doc._id,
  });

  if (!existingHabitLog)
    await mongoose.models.HabitLog.create({
      habitId: doc._id,
      progressHistory: [{ date: Date.now(), isCompleted: false }],
    });
  next();
});

module.exports = mongoose.model('Habit', HabitSchema);
