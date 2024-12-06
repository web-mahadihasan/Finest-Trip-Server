const express = require("express");
const { getAllVisaData, getVisaDataById, createVisaData, removeVisaData } = require("../controllers/visaDataController");

const visaRouter = express.Router()

visaRouter.get("/visas", getAllVisaData);
visaRouter.get("/visa-details/:id", getVisaDataById);
visaRouter.post("/add-visa", createVisaData);
visaRouter.delete("/delete-visa/:id", removeVisaData);

module.exports = visaRouter;