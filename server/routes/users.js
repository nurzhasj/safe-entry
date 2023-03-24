const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const response = require("express");
const jwt = require('jsonwebtoken');
const authenticate = require("../middlewares/authenticate");

router.post("/", async (request, response) => {
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
});

router.post("/admins", async (request, response) => {
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
});

router.get("/", authenticate, async (request, response) => {
    try {
        const users = await User.find();
        
        return response
            .json(users);
    } catch (error) {
        response
            .status(500)
            .json(error);
    }
});

module.exports = router;