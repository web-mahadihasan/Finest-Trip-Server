require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectToDatabase } = require("./config/database");
const userRoutes = require("./routes/userRoutes")

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection 
connectToDatabase()

// Routes 
app.use("/", userRoutes)

// Root Endpoint 
app.get("/", (req, res) => {
    res.send("This server is running")
})

// Start Server
app.listen(port, () => {
    console.log(`Server is running with ${ port}`)
})