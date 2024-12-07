const { ObjectId } = require("mongodb")
const { client } = require("../config/database")


const visaCollection = client.db("Finest_Trip").collection("Added_Visa")

// Get all Visa 
const getAllVisaData = async (req, res) => {
    const cursor = visaCollection.find()
    const result = await cursor.toArray()
    res.send(result)
}
// Get visa by ID 
const getVisaDataById = async (req, res) => {
    const id = req.params.id;
    const query = {_id: new ObjectId(id)}
    const visa = await visaCollection.findOne(query)
    res.send(visa)
}

// Create Visa 
const createVisaData = async (req, res) => {
    const visaData = req.body;
    const result = await visaCollection.insertOne(visaData);
    res.send(result)
}

// Update visa data 
const updateVisaData = async (req, res) =>  {
    const id = req.params.id;
    const data = req.body
    const filter = {_id: new ObjectId(id)}
    const options = { upsert: true };
    const updateData = {
        $set:{
            visaTitle: data.visaTitle,
            countryImage: data.countryImage,
            countryName: data.countryName,
            processingTime: data.processingTime,
            description: data.description,
            ageRestriction: data.ageRestriction,
            visaFee: data.visaFee,
            validity: data.validity,
            applicationMethod: data.applicationMethod,
            userEmail: data.userEmail,
            userName: data.userName
        }
    }
    const result = await visaCollection.updateOne(filter, updateData, options)
    res.send(result)
}
// Remove Visa 
const removeVisaData = async (req, res) =>  {
    const id = req.params.id
    const query = {_id: new ObjectId(id)}
    const remaining = await visaCollection.deleteOne(query)
    res.send(remaining)
}
module.exports = {getAllVisaData, getVisaDataById, createVisaData, removeVisaData, updateVisaData}