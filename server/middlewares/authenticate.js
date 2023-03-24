const jwt = require("jsonwebtoken");

function authenticate(request, response, next) {
    const authHeader = request.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) {
        return response
            .sendStatus(401);
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, email) => {
        if (error) {
            return response
                .sendStatus(403);
        }

        request.email = email;
        next();
    });
}

module.exports = authenticate;