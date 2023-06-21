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
            const user = await User.findOne({ uid: request.body.userId });

            if (! user) {
                return response.status(404).json({ message: 'User not found' });
            }

            // user's uid
            console.log(`User's UID: ${user.uid}`);

            // updating the userId in newEntry to be MongoDB ObjectId
            newEntry.userId = user._id;

            const entry = await newEntry.save();            

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

    // @desc    Getting all entries
    // @route   GET /api/entries/:userType
    // @access  Private
    const getAllEntries = async (request, response) => {
        const userType = request.params.userType;

        try {
            // Getting users by user type
            const users = await User.find({ userType: userType });
            
            // Getting user IDs from the users
            const userIds = users.map(user => user._id);
            
            // Finding entries associated with the users
            const entries = await 
                Entry.find({ 
                    userId: { $in: userIds }
                })
                    .populate('userId')
                    .sort({ enterDate: -1 });

            response   
                .status(200)
                .json(entries);
        } catch (err) {
            console.error(err.message);
            response
                .status(500)
                .json({ message: 'Internal Server Error', error: err.message })
        }
    }


    module.exports = {
        createEntry,
        getAllEntries,
    };