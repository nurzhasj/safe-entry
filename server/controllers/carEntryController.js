const CarEntry = require('../models/CarEntry');
const Car = require('../models/Car');

// @desc    Getting Users
// @route   GET /api/carEntries
// @access  Private
const getCarEntries = async (request, response) => {
    try {
        const carEntries = await 
            CarEntry.find()
                .populate({
                    path: 'carId',
                    populate: { path: 'ownerId' }
                })
                .sort({ scanDate: -1 });

        return response
            .json(carEntries);
    } catch (error) {
        console.error('Error in getCarEntries:', error);
        response
          .status(500)
          .json({ message: 'Internal Server Error', error: error.message });
    }
}

    // @desc    Creating an entry
    // @route   POST /api/carEntries
    // @access  Private
    const createCarEntry = async (request, response) => {  
        // entry creation
        const newCarEntry = new CarEntry({
            carId: request.body.carId,
            scanDate: request.body.scanDate
        });

        try {
            const carEntry = await newCarEntry.save();

            const car = await Car.findById(request.body.carId);

            if (! car) {
                return response.status(404).json({ message: 'Car not found' });
            }

            car.carEntries.push(carEntry.id);
            
            await car.save();

            response
                .status(201)
                .json(carEntry);
        } catch (err) {
            console.error(err.message);
            response
                .status(500)
                .json({ message: 'Internal Server Error', error: err.message });
        }
    }

module.exports = {
    getCarEntries,
    createCarEntry
};