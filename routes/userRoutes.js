const express = require("express");
const { getAllUser, createUser } = require("../controllers/userController");


const userRouter = express.Router()

// Routes
userRouter.get("/users", getAllUser);
userRouter.post("/add-user", createUser);


module.exports = userRouter;