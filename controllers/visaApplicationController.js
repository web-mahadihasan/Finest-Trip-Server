const { ObjectId } = require("mongodb")
const { client } = require("../config/database")

const applicationCollection = client.db("Finest_Trip").collection("Visa_Applications")

// Get all visa Application
const getAllApplication = async (req, res) => {
    const cursor = applicationCollection.find()
    const result = await cursor.toArray()
    res.send(result)
}

// Add new visa application 
const createNewApplication = async (req, res) => {
    const user = req.body;
    const result = await applicationCollection.insertOne(user);
    res.send(result)
}
// Cancel & remove application
const cancelApplication = async (req, res) => {
    const id = req.params.id
    console.log(id)
    const query = {_id: new ObjectId(id) };
    const result = await applicationCollection.deleteOne(query)
    res.send(result)
}
module.exports = {
    getAllApplication,
    createNewApplication,
    cancelApplication,
}