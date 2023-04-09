// Express for backend side
const express = require("express");
// Mongo for database
const mongoose = require("mongoose");
// DotEnv for hiding sensitive data
const dotenv = require("dotenv");
// Process Image Router
const processImageRoute = require("./routes/process-image");
// User Router
const userRoute = require("./routes/users");
// Auth Router
const authRouter = require("./routes/auth");
// Recognition Router
const recoRouter = require("./routes/recognize");

// Body Parser
const bodyParser = require('body-parser');

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

// Configuring DotEnv before using it
dotenv.config();

mongoose.set('strictQuery', false);
// Mongo cloud cluster connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Mongo connection is successful"))
    .catch((err) => console.log(err));
// Extending
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

// Registering Process Image Route
app.use("/api/process-image", processImageRoute);

// Login process
app.use("/api/login", authRouter);

// User routes
app.use("/api/users", userRoute);

// The recognition route
app.use("/api/recognize", recoRouter);

// Server listening process
app.listen(port, () => {
    console.log("Backend server is running!");
});