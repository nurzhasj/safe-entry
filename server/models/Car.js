const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  licensePlate: { type: String, required: true },
  modelName: { type: String, required: true },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  addedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin'
  }
});

module.exports = mongoose.model('Car', carSchema);