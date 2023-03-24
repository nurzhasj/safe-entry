const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  date: Date,
  entryTime: {
    type: Date,
    default: Date.now
  },
  exitTime: Date
});

module.exports = mongoose.model('Entry', entrySchema);