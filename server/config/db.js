// Database connection
const mongoose = require("mongoose");

// Setting strict version of querying from db
mongoose.set('strictQuery', false);

// Mongo cloud cluster connection
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;
