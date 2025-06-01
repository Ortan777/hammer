const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  progress: [
    {
      day: { type: Number, required: true },
      completed: { type: Boolean, default: false }
    }
  ]
});

module.exports = mongoose.model('User', userSchema);
