const Entry = require("../models/Entry");
const User = require("../models/User");

// @desc    Creating an entry
// @route   POST /api/entries
// @access  Private
const createEntry = async (request, response) => {  
    // entry creation
    const newEntry = new Entry({
        userId: request.body.userId,
        enterDate: request.body.enterDate,
        exitDate: request.body.exitDate,
    });

    try {
        const entry = await newEntry.save();

        const user = await User.findById(request.body.userId);

        if (! user) {
            return response.status(404).json({ message: 'User not found' });
        }

        user.entries.push(entry.id);
        await user.save();

        response
            .status(201)
            .json(entry);
    } catch (err) {
        console.error(err.message); // log the error message to the console
        response
            .status(500)
            .json({ message: 'Internal Server Error', error: err.message });
    }
}

module.exports = {
    createEntry,
};