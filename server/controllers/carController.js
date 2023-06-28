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
            Car.find({ carEntries: { $exists: true, $ne: [] }})
                .populate('carEntries');

        return response
            .json(cars);
    } catch (error) {
        console.error('Error in getCars:', error);
        response
          .status(500)
          .json({ message: 'Internal Server Error', error: error.message });
    }
}

    // @desc    Creating a car
    // @route   POST /api/cars
    // @access  Private
const createCar = async (request, response) => {  
    // entry creation
    const newCar = new Car({
        licensePlate: request.body.licensePlate,
        modelName: request.body.modelName,
        ownerId: request.body.ownerId,
    });

    try {
        const car = await newCar.save();

        response
            .status(201)
            .json(car);
    } catch (err) {
        console.error(err.message);
        response
            .status(500)
            .json({ message: 'Internal Server Error', error: err.message });
    }
}

module.exports = {
    getCars,
    createCar
};