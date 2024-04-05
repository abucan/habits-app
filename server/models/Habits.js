const mongoose = require('mongoose');

const HabitSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    habitName: {
        type: String,
        required: [true, 'Please provide a habit name'],
        minlength: 3,
        maxlength: 50
    },
    habitDescription: {
        type: String,
        required: [true, 'Please provide a habit description'],
        minlength: 3,
        maxlength: 100
    },
    habitIcon: {
        type: String,
        default: 'default'
    },
    habitStartDate: {
        type: Date,
        default: Date.now
    },
    habitEndDate: {
        type: Date,
        required: [true, 'Please provide a habit end date']
    },
    habitFrequency: {
        type: String,
        enum: ['daily', 'weekly', 'monthly'],
        default: 'daily'
    },
    habitDays: {
        type: [String],
        default: []
    },
    habitStatus: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    },
    habitProgress: {
        type: Number,
        default: 0
    },
    habitStreak: {
        type: Number,
        default: 0
    },
    habitHistory: {
        type: [Date],
        default: []
    },
})

module.exports = mongoose.model('Habit', HabitSchema);