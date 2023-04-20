const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  enterDate: String,
  exitDate: String,
});

module.exports = mongoose.model('Entry', entrySchema);