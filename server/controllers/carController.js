const User = require("../models/User");
const Entry = require("../models/Entry");
const Car = require("../models/Car");
const CarEntry = require('../models/CarEntry');

// @desc    Getting Users
// @route   GET /api/users
// @access  Private
const getCars = async (request, response) => {
    try {
        const cars = await 
            Car.find().populate('ownerId');

        return response
            .json(cars);
    } catch (error) {
        console.error('Error in getCars:', error);
        response
          .status(500)
          .json({ message: 'Internal Server Error', error: error.message });
    }
}

module.exports = {
    getCars,
};