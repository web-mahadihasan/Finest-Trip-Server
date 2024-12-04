const { client } = require("../config/database")


const userCollection = client.db("Finest_Trip").collection("Users")

// Get all Users 
const getAllUser = async (req, res) => {
    const cursor = userCollection.find()
    const result = await cursor.toArray()
    res.send(result)
}

// Create user 
const createUser = async (req, res) => {
    const user = req.body;
    const result = await userCollection.insertOne(user);
    res.send(result)
}
module.exports = {
    getAllUser,
    createUser
}