const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// @desc    Signing In a User
// @route   POST /api/login
// @access  Private
const signIn = async (request, response) => {
    try {
        const user = await User.findOne({
            email: request.body.email
        });
        
        // Object to serialize as jwt
        const email = {email : request.body.email};
        
        // Checking if user is found
        if (user === null) {
            return response
                .status(400)
                .send("User cannot be found !");
        }

        // Comparing passwords
        if (! await bcrypt.compare(request.body.password, user.password)) {
            return response
                .status(400)
                .send("Password is not correct !");
        }

        // JWT authentication
        const accessToken = jwt.sign(email, process.env.ACCESS_TOKEN_SECRET);
        
        return response.json({
            accessToken: accessToken
        }); 
    } catch (error) {
        return response
            .status(500)
            .json(error);
    }
}

module.exports = {
    signIn,
};