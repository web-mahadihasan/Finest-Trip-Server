const express = require("express");
const { getAllVisaData, getVisaDataById, createVisaData, removeVisaData, updateVisaData, getLastedVisa, myVisaApplication, myAddedVisa } = require("../controllers/visaDataController");

const visaRouter = express.Router()

visaRouter.get("/visas", getAllVisaData);
visaRouter.get("/lasted-visa", getLastedVisa)
visaRouter.get("/my-added-visa/:email", myAddedVisa)

visaRouter.get("/visa-details/:id", getVisaDataById);
visaRouter.post("/add-visa", createVisaData);
visaRouter.delete("/delete-visa/:id", removeVisaData);
visaRouter.put("/update-data/:id", updateVisaData)

module.exports = visaRouter;