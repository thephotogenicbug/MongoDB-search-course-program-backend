const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// middlewares
const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());

// mongodb connection
const connectDB = require("./config/db");
connectDB();

// listen to port
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on ${PORT}`));