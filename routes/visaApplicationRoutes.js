const express = require("express");
const { getAllApplication, createNewApplication, cancelApplication, getApplicationById } = require("../controllers/visaApplicationController");


const noRouter = express.Router()

// Routes
applicationRouter.get("/all-application", getAllApplication);
applicationRouter.get("/applications/:id", getApplicationById)
applicationRouter.post("/submit-application", createNewApplication);
applicationRouter.delete("/cancel-application/:id", cancelApplication)

module.exports = applicationRouter;