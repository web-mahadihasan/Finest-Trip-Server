const express = require("express");
const { getAllVisa, createVisa, getVisaById } = require("../controllers/visaController");

const visaRouter = express.Router()

visaRouter.get("/visas", getAllVisa);
visaRouter.get("/visa-details/:id", getVisaById);
visaRouter.post("/add-visa", createVisa);

module.exports = visaRouter;