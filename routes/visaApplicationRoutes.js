const express = require("express");
const { getAllApplication, createNewApplication, cancelApplication, getApplicationById, myVisaApplication } = require("../controllers/visaApplicationController");


const applicationRouter = express.Router()

// Routes
applicationRouter.get("/all-application", getAllApplication);
applicationRouter.get("/applications/:id", getApplicationById)
applicationRouter.get("/my-visa-application/:email", myVisaApplication)

applicationRouter.post("/submit-application", createNewApplication);
applicationRouter.delete("/cancel-application/:id", cancelApplication)

module.exports = applicationRouter;