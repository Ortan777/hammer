const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  day: Number,
  task: String,
  tip: String,
  completed: { type: Boolean, default: false }
});

const planSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  goal: { type: String, required: true },
  plan: [taskSchema],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Plan', planSchema);
