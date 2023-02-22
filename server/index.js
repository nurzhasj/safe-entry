// Express for backend side
const express = require("express");
// DotEnv for hiding sensitive data
const dotenv = require("dotenv");

// App bootstrapping using express
const app = express();

// Port number of backend server
const port = 8800;

// Configuring DotEnv before using it
dotenv.config();

// Express server cannot accept json files by default, so we have to handle that
app.use(express.json());

// Server listening process
app.listen(port, () => {
    console.log("Backend server is running!");
});