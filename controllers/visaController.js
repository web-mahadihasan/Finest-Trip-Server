const { client } = require("../config/database")


const visaCollection = client.db("Finest_Trip").collection("Added_Visa")

// Get all Visa 
const getAllVisa = async (req, res) => {
    const cursor = visaCollection.find()
    const result = await cursor.toArray()
    res.send(result)
}

// Create Visa 
const createVisa = async (req, res) => {
    const visaData = req.body;
    const result = await visaCollection.insertOne(visaData);
    res.send(result)
}
module.exports = {getAllVisa, createVisa}