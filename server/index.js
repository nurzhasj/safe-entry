// Express for backend side
const express = require("express");
// Database connection
const connectDB = require("./config/db");
// DotEnv for hiding sensitive data
const dotenv = require("dotenv");

// Routers
const processImageRoute = require("./routes/process-image");
const userRoute = require("./routes/users");
const carRoute = require("./routes/cars");
const authRouter = require("./routes/auth");
const recoRouter = require("./routes/recognize");

// Body Parser
const bodyParser = require('body-parser');

// For coloring strings
const colors = require('colors');

// Configuring DotEnv before using it
dotenv.config();

// Database connection
connectDB();

// App bootstrapping using express
const app = express();

// Cors package for getting request with no errors
const cors = require('cors');

// enabling cors
app.use(cors());

// Express server cannot accept json files by default, so we have to handle that
app.use(express.json());

// Port number of backend server
const port = 8800;

// Extending
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

// Registering Process Image Route
app.use("/api/process-image", processImageRoute);

// Login process
app.use("/api/login", authRouter);

// User routes
app.use("/api/users", userRoute);

// Car routes
app.use("/api/cars", carRoute);

// The recognition route
app.use("/api/recognize", recoRouter);

// Server listening process
app.listen(port, () => {
    console.log(`Backend server is running on port: ${port}`.blue.underline);
});