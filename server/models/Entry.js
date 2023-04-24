const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  enterDate: {
    type: Date,
    default: Date.now(),
  },
  exitDate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Entry', entrySchema);