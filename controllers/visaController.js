const { ObjectId } = require("mongodb")
const { client } = require("../config/database")


const visaCollection = client.db("Finest_Trip").collection("Added_Visa")

// Get all Visa 
const getAllVisa = async (req, res) => {
    const cursor = visaCollection.find()
    const result = await cursor.toArray()
    res.send(result)
}
// Get visa by ID 
const getVisaById = async (req, res) => {
    const id = req.params.id;
    const query = {_id: new ObjectId(id)}
    const visa = await visaCollection.findOne(query)
    res.send(visa)
}

// Create Visa 
const createVisa = async (req, res) => {
    const visaData = req.body;
    const result = await visaCollection.insertOne(visaData);
    res.send(result)
}
module.exports = {getAllVisa, getVisaById, createVisa}