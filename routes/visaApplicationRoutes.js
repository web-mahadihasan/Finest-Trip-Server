const express = require("express");
const { getAllApplication, createNewApplication, cancelApplication } = require("../controllers/visaApplicationController");


const applicationRouter = express.Router()

// Routes
applicationRouter.get("/visa-application", getAllApplication);
applicationRouter.post("/submit-application", createNewApplication);
applicationRouter.delete("/cancel-application/:id", cancelApplication)

module.exports = applicationRouter;