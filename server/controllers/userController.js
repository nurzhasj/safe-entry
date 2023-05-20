const User = require("../models/User");
const Entry = require("../models/Entry");
const bcrypt = require("bcrypt");

// @desc    Signing In a User
// @route   POST /api/login
// @access  Private
const createUser = async (request, response) => {
    // password ecnryption
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(request.body.password, salt);
    
    // user creation
    const newUser = new User({
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        email: request.body.email,
        password: hashedPassword,
        uid: request.body.uid,
        userType: request.body.userType,
        images: request.body.images,
        isAdmin: false
    });

    try {
        const user = await newUser.save();

        response
            .status(201)
            .json(user);
    } catch (err) {
        response
            .status(500)
            .json(err);
    } 
}

// @desc    Creating User
// @route   POST /api/users
// @access  Private
const createAdmin = async (request, response) => {
    // password ecnryption
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(request.body.password, salt);
    
    // user creation
    const newUser = new User({
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        email: request.body.email,
        password: hashedPassword,
        userType: request.body.userType,
        images: request.body.images,
        isAdmin: true,
        adminRole: request.body.adminRoleId
    });

    try {
        const user = await newUser.save();

        response
            .status(201)
            .json(user);
    } catch (err) {
        response
            .status(500)
            .json(err);
    } 
}

// @desc    Getting Users
// @route   GET /api/users
// @access  Private
const getUsers = async (request, response) => {
    const userType = request.params.userType;

    try {
        const users = await User
            .find({ entries: { $exists: true, $ne: [] }, userType: userType })
            .populate('entries')
            .populate('cars')
            .sort({ enterDate: 1 });
        
        return response
            .json(users);
    } catch (error) {
        response
            .status(500)
            .json(error);
    }
}

// @desc    Getting a user
// @route   GET /api/users/entry/:entryId
// @access  Private
const getUser = async (request, response) => {
    const { entryId } = request.params;

    try {
        const user = await User
            .findOne({ entries: { $in: [entryId] } })
            .populate({
                path: 'entries',
                options: { sort: { 'enterDate': -1 } }
            });

        return response
            .json(user);
    } catch(error) {
        response
            .status(500)
            .json(error);
    }
};

module.exports = {
    getUsers,
    getUser,
    createUser,
    createAdmin,
};