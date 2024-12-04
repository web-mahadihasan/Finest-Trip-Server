const express = require("express");
const { getAllVisa, createVisa } = require("../controllers/visaController");

const visaRouter = express.Router()

visaRouter.get("/", getAllVisa);
visaRouter.post("/add-visa", createVisa);

module.exports = visaRouter;