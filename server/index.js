const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");

const processImageRoute = require("./routes/process-image");
const userRoute = require("./routes/users");
const carRoute = require("./routes/cars");
const carEntryRoute = require("./routes/carEntries");
const entryRoute = require("./routes/entries");
const authRouter = require("./routes/auth");
const recoRouter = require("./routes/recognize");

const bodyParser = require('body-parser');
const colors = require('colors');
const http = require("http");
const { Server } = require("socket.io");
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

const port = 8800;
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

app.use("/api/process-image", processImageRoute);
app.use("/api/login", authRouter);
app.use("/api/users", userRoute);
app.use("/api/entries", entryRoute);
app.use("/api/cars", carRoute);
app.use("/api/carEntries", carEntryRoute);
app.use("/api/recognize", recoRouter);

// Create HTTP server from Express app
const server = http.createServer(app);

// Create Socket.IO instance attached to HTTP server
const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
  console.log('socket connection is set');
  socket.on('newEntry', (entryData) => {
    io.emit('newEntry', entryData);
  });
});

server.listen(port, () => {
    console.log(`Backend server is running on port: ${port}`.blue.underline);
});