const mongoose = require('mongoose');

const carEntrySchema = new mongoose.Schema({
    carId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Car'
    },
    scanDate: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model('CarEntry', carEntrySchema);