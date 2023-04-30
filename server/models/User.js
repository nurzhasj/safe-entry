const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    uid: {type: String, required: true},
    password: { type: String, required: true },
    userType: { type: String, required: true, enum: ['student', 'employee'] },
    images: [{ 
      type: String,
      required: true
    }],
    isAdmin: {type: Boolean, default: false},
    adminType: { type: String, enum: ['super-admin', 'admin'] },
    entries: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Entry'
    }],
    cars: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Car'
    }]
});

module.exports = mongoose.model("User", UserSchema);