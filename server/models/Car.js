const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  licensePlate: { type: String, required: true },
  modelName: { type: String, required: true },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  carEntries: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CarEntry'
  }]
});

module.exports = mongoose.model('Car', carSchema);